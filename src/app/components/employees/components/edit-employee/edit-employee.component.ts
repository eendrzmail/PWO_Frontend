import { absenceTYPE } from './../../../../models/absence';
import { AbsencesService } from './../../../../services/absences.service';
import { Observable } from 'rxjs';
import { PositionsService } from './../../../../services/positions.service';
import { EmployeePOST } from './../../../../models/employee';
import { EmployeesService } from './../../../../services/employees.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Absence } from 'src/app/models/absence';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeesService,
    private positionsService: PositionsService,
    private absenceService: AbsencesService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  employee!: EmployeePOST;
  allPositions$ = this.positionsService.getPositions()
  employeeAbsences$!: Observable<Absence[]>;
  absenceTypes!: absenceTYPE[]


  ngOnInit(): void {
    this.absenceService.getAbsenceTypes().subscribe(x => {
      this.absenceTypes = x
    })

    this.route.params.subscribe(x => {
      this.employeeService.getEmployee(x.id).subscribe(x => {
        this.employee = x
        this.employeeAbsences$ = this.absenceService.getEmployeeAbsences(x.id)
        console.log(this.employee);
      })
    })
  }

  updateEmployee() {
    if (!this.employee)
      return
    this.employee.status == !!this.employee.status
    this.employeeService.updateEmployee(this.employee)
      .then((r) => (this.openSnackBar("Pomyślnie dodano", "Ok", "green"), this.router.navigateByUrl("/employees")))
      .catch(e => (this.openSnackBar("Wystąpił błąd", "Ok", "red"), console.log(e)))
  }

  openSnackBar(message: string, action: string, cssClass: "green" | "red") {
    this._snackBar.open(message, action, { panelClass: cssClass });
  }

}
