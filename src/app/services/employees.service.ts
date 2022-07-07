import { EmployeeGET, EmployeePOST } from './../models/employee';
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

  getEmployee(id: string): Observable<EmployeeGET> {
    return this.http.get<EmployeeGET>('https://prac-wyt-opr-backend.herokuapp.com/api/employees/' + id)
  }

  addEmployee(employee: Omit<EmployeePOST, "id">) {
    return this.http.post(`https://prac-wyt-opr-backend.herokuapp.com/api/employees/`, employee).toPromise()
  }

  updateEmployee(employee: EmployeePOST) {
    return this.http.put(`https://prac-wyt-opr-backend.herokuapp.com/api/employees/`, employee).toPromise()
  }
}
