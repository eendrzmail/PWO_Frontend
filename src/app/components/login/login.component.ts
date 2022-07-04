import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private AuthService: AuthService
  ) { }

  email = '';
  password = ''

  ngOnInit(): void {
  }

  async login() {
    try {
      await this.AuthService.login(this.email, this.password);
    }
    catch (err) {
      console.log(err);
    }
  }

}
