import { absenceTYPE, AbsencePOST, Absence } from './../models/absence';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbsencesService {

  constructor(
    private http: HttpClient
  ) { }

  getAbsenceTypes(): Observable<absenceTYPE[]> {
    return this.http.get<absenceTYPE[]>('https://prac-wyt-opr-backend.herokuapp.com/api/absenceTypes/')
  }

  getAllAbsences(): Observable<Absence[]> {
    return this.http.get<Absence[]>('https://prac-wyt-opr-backend.herokuapp.com/api/absences/')
  }

  getEmployeeAbsences(id: number): Observable<Absence[]> {
    return this.http.get<Absence[]>('https://prac-wyt-opr-backend.herokuapp.com/api/absences/' + id)
  }

  addAbsence(absence: AbsencePOST) {
    return this.http.post('https://prac-wyt-opr-backend.herokuapp.com/api/absences/', absence).toPromise()
  }

  updateAbsence(absence: AbsencePOST) {
    return this.http.put('https://prac-wyt-opr-backend.herokuapp.com/api/absences/', absence).toPromise()

  }
}
