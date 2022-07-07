import { Absence, absenceTYPE } from './../../models/absence';
import { AbsencesService } from './../../services/absences.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-absences',
  templateUrl: './absences.component.html',
  styleUrls: ['./absences.component.scss']
})
export class AbsencesComponent implements OnInit {

  constructor(
    private AbsencesService: AbsencesService,
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['imie', 'nazwisko', 'absence_from', 'absence_to', 'absence_type'];
  TableData!: MatTableDataSource<Absence>;
  absenceTypes!: absenceTYPE[];


  ngOnInit(): void {
    this.getAbsences();
    this.AbsencesService.getAbsenceTypes().subscribe((x: absenceTYPE[]) => {
      this.absenceTypes = x
    })
  }

  getAbsences() {
    this.AbsencesService.getAllAbsences().subscribe(x => {
      this.TableData = new MatTableDataSource<Absence>(x)
      this.TableData.sort = this.sort;
    })
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  openSnackBar(message: string, action: string, cssClass: "green" | "red") {
    this._snackBar.open(message, action, { panelClass: cssClass });
  }

}
