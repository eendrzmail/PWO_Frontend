import { Absence } from './../../../../models/absence';
import { AbsencesService } from './../../../../services/absences.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-absence',
  templateUrl: './absence.component.html',
  styleUrls: ['./absence.component.scss']
})
export class AbsenceComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private AbsencesService: AbsencesService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  absenceTypes$ = this.AbsencesService.getAbsenceTypes()
  absence!: Absence;

  ngOnInit(): void {
    this.absence = history.state
  }

  update() {
    if (!this.absence) return;

    this.AbsencesService.updateAbsence(this.absence)
      .then((r) => (this.openSnackBar("Pomyślnie dodano", "Ok", "green"), this.router.navigateByUrl("/absences")))
      .catch(e => (this.openSnackBar("Wystąpił błąd", "Ok", "red"), console.log(e)))

  }

  openSnackBar(message: string, action: string, cssClass: "green" | "red") {
    this._snackBar.open(message, action, { panelClass: cssClass });
  }

}
