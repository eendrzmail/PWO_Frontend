import { HttpClient } from '@angular/common/http';
import { Bonus } from './../models/bonus';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BonusesService {

  constructor(
    private http: HttpClient
  ) { }

  getEmployeeBonuses(employeeId: number): Observable<Bonus[]> {
    return this.http.get<Bonus[]>('https://prac-wyt-opr-backend.herokuapp.com/api/bonuses/' + employeeId)
  }

  addBonus(bonus: Omit<Bonus, "id">) {
    return this.http.post('https://prac-wyt-opr-backend.herokuapp.com/api/bonuses/', bonus).toPromise()
  }

  updateBonus(bonus: Bonus) {
    return this.http.post('https://prac-wyt-opr-backend.herokuapp.com/api/bonuses/', bonus).toPromise()
  }

}
