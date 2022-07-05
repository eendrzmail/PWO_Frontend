import { LocalStorageService } from './local-storage.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private LocalStorageService: LocalStorageService
  ) { }

  login(email: string, password: string): Promise<boolean> {
    return new Promise((res, rej) => {
      this.http.post('https://prac-wyt-opr-backend.herokuapp.com/api/login', { email, password })
        .subscribe((data: any) => {
          if (data.accesToken) {
            this.LocalStorageService.setValue('accessToken', data.accesToken)
            res(true);
          }
        }, err => rej(err.error)
        )

    })
  }

  validateUser() {
    return new Promise((res, rej) => {
      this.http.get('https://prac-wyt-opr-backend.herokuapp.com/api/validate').subscribe(
        () => res(true),
        (err) => rej(err.status == 200)
      )
    })
  }

}
