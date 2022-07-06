import { PositionsGET } from './../../../../models/positions';
import { PositionsService } from './../../../../services/positions.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})
export class PositionComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private PositionsService: PositionsService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  position: PositionsGET | null = null

  ngOnInit(): void {
    this.route.params.subscribe(x => {
      this.PositionsService.getPosition(x.id).subscribe(x =>
        this.position = x)
    })
  }

  updatePosition() {
    if (!this.position)
      return
    this.PositionsService.updatePosition(this.position)
      .then((r) => (this.openSnackBar("Pomyślnie dodano", "Ok", "green"), this.router.navigateByUrl("/positions")))
      .catch(e => (this.openSnackBar("Wystąpił błąd", "Ok", "red"), console.log(e)))
  }

  openSnackBar(message: string, action: string, cssClass: "green" | "red") {
    this._snackBar.open(message, action, { panelClass: cssClass });
  }
}
