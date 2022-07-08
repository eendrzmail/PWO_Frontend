import { Component, OnInit } from '@angular/core';
import { Bonus } from './../../../../models/bonus';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BonusesService } from './../../../../services/bonuses.service';

@Component({
  selector: 'app-add-bonus',
  templateUrl: './add-bonus.component.html',
  styleUrls: ['./add-bonus.component.scss']
})
export class AddBonusComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private bonusesService: BonusesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(x => {
      this.bonus.employee_id = x.id
      this.id = x.id
    })
  }

  id!: number
  bonus: Bonus = {
    "bonus_id": 0,
    "employee_id": 0,
    "value": 0,
    "bonus_date": new Date()
  }

  add() {
    console.log(this.bonus)
    this.bonusesService.addBonus(this.bonus)
      .then((r) => (this.openSnackBar("Pomyślnie dodano", "Ok", "green"), this.router.navigateByUrl(`/employees/${this.id}`)))
      .catch(e => (this.openSnackBar("Wystąpił błąd", "Ok", "red"), console.log(e)))
  }

  openSnackBar(message: string, action: string, cssClass: "green" | "red") {
    this._snackBar.open(message, action, { panelClass: cssClass });
  }

  

}
