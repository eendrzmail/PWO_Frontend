import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private AuthService: AuthService,
    private router: Router
  ) { }

  email = '';
  password = ''

  ngOnInit(): void {
  }

  async login() {
    try {
      await this.AuthService.login(this.email, this.password);
      this.router.navigateByUrl('/')
    }
    catch (err) {
      console.log(err);
    }
  }

}
