import { EmployeeGET } from './../models/employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(
    private http: HttpClient,
  ) { }

  getEmployees(): Observable<EmployeeGET[]> {
    return this.http.get<EmployeeGET[]>('https://prac-wyt-opr-backend.herokuapp.com/api/employees/')
  }
}
