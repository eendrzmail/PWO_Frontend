import { EmployeeGET } from './../../../../models/employee';
import { AbsencesService } from './../../../../services/absences.service';
import { Absence, AbsencePOST } from './../../../../models/absence';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-absence',
  templateUrl: './add-absence.component.html',
  styleUrls: ['./add-absence.component.scss']
})
export class AddAbsenceComponent implements OnInit {

  constructor(
    private AbsencesService: AbsencesService,
    private route: ActivatedRoute,
    private employeeService: EmployeesService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  absence: AbsencePOST = {
    "absence_id": 0,
    "employee_id": 0,
    "absence_type": 0,
    absence_from: new Date(),
    absence_to: new Date()
  }
  employee!: EmployeeGET
  absenceTypes$ = this.AbsencesService.getAbsenceTypes()


  ngOnInit(): void {
    this.route.params.subscribe(x => {
      this.employeeService.getEmployee(x.id).subscribe(x => {
        this.employee = x
        this.absence.employee_id = x.id
      })
    })
  }

  save() {
    if (!this.employee && !this.absence) return

    this.AbsencesService.addAbsence(this.absence)
      .then((r) => (this.openSnackBar("Pomyślnie dodano", "Ok", "green"), this.router.navigateByUrl("/absences")))
      .catch(e => (this.openSnackBar("Wystąpił błąd", "Ok", "red"), console.log(e)))
  }

  openSnackBar(message: string, action: string, cssClass: "green" | "red") {
    this._snackBar.open(message, action, { panelClass: cssClass });
  }
}
