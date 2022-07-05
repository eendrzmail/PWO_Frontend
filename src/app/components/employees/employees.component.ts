import { EmployeesService } from './../../services/employees.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  constructor(
    private employeeService: EmployeesService,
    private _liveAnnouncer: LiveAnnouncer
  ) { }

  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['imie', 'nazwisko', 'msc_pracy', 'nazwa', 'status'];
  TableData!: MatTableDataSource<TableRow>;

  allEmployees$ = this.employeeService.getEmployees().subscribe(x => {
    this.TableData = new MatTableDataSource<TableRow>(x as unknown[] as TableRow[])
  })

  ngOnInit(): void {
  }

  announceSortChange(sortState: Sort) {

    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}

interface TableRow {
  imie: string;
  nazwisko: number;
  msc_pracy: number;
  nazwa: string;
  status: boolean;
}