import { PositionsService } from './../../../../services/positions.service';
import { EmployeePOST } from './../../../../models/employee';
import { EmployeesService } from './../../../../services/employees.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  employee!: EmployeePOST;
  allPositions$ = this.positionsService.getPositions()

  ngOnInit(): void {
    this.route.params.subscribe(x => {
      this.employeeService.getEmployee(x.id).subscribe(x =>
        this.employee = x)
    })
  }

  updateEmployee() {
    if (!this.employee)
      return
    this.employeeService.updateEmployee(this.employee)
      .then((r) => (this.openSnackBar("Pomyślnie dodano", "Ok", "green"), this.router.navigateByUrl("/employees")))
      .catch(e => (this.openSnackBar("Wystąpił błąd", "Ok", "red"), console.log(e)))
  }

  openSnackBar(message: string, action: string, cssClass: "green" | "red") {
    this._snackBar.open(message, action, { panelClass: cssClass });
  }

}
