import { AddPositionComponent } from './components/add-position/add-position.component';
import { PositionsService } from './../../services/positions.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.scss']
})
export class PositionsComponent implements OnInit {

  constructor(
    private positionService: PositionsService,
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['nazwa', 'podstawa'];
  TableData!: MatTableDataSource<TableRow>;

  getPositions() {
    this.positionService.getPositions().subscribe(x => {
      this.TableData = new MatTableDataSource<TableRow>(x as unknown[] as TableRow[])
      this.TableData.sort = this.sort;
    })
  }


  ngOnInit(): void {
    this.getPositions()
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddPositionComponent, {
      width: '250px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.positionService.addPosition(result)
          .then((r) => (this.openSnackBar("Pomyślnie dodano", "Ok", "green"), this.getPositions()))
          .catch(e => (this.openSnackBar("Wystąpił błąd", "Ok", "red"), console.log(e)))
      }
    });
  }

  openSnackBar(message: string, action: string, cssClass: "green" | "red") {
    this._snackBar.open(message, action, { panelClass: cssClass });
  }

}



interface TableRow {
  id: number,
  nazwa: string,
  podstawa: number
}
