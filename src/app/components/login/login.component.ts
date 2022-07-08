import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private AuthService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar,

  ) { }

  email = '';
  password = ''

  ngOnInit(): void {
  }

  async login() {
    try {
      await this.AuthService.login(this.email, this.password);
      this.openSnackBar("Zalogowano", "Ok", "green")
      this.router.navigateByUrl('/')
    }
    catch (err) {
      console.log(err);
      this.openSnackBar("nieprawidłowe dane", "Ok", "red")
    }
  }

  openSnackBar(message: string, action: string, cssClass: "green" | "red") {
    this._snackBar.open(message, action, { panelClass: cssClass });
  }

}
