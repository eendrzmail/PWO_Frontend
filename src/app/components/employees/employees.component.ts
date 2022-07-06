import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeesService } from './../../services/employees.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  constructor(
    private employeeService: EmployeesService,
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['imie', 'nazwisko', 'data_rozpoczecia', 'nazwa', 'status'];
  TableData!: MatTableDataSource<TableRow>;

  getEmployees() {
    this.employeeService.getEmployees().subscribe(x => {
      this.TableData = new MatTableDataSource<TableRow>(x as unknown[] as TableRow[])
      this.TableData.sort = this.sort;
    })
  }

  ngOnInit(): void {
    this.getEmployees()
  }

  announceSortChange(sortState: Sort) {

    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddEmployeeComponent, {
      width: '250px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);

        this.employeeService.addEmployee(result)
          .then((r) => (this.openSnackBar("Pomyślnie dodano", "Ok", "green"), this.getEmployees()))
          .catch(e => (this.openSnackBar("Wystąpił błąd", "Ok", "red"), console.log(e)))
      }
    });
  }

  openSnackBar(message: string, action: string, cssClass: "green" | "red") {
    this._snackBar.open(message, action, { panelClass: cssClass });
  }

}

interface TableRow {
  imie: string;
  nazwisko: number;
  data_rozpoczecia: Date;
  nazwa: string;
  status: boolean;
}