import { PositionsGET } from './../models/positions';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  constructor(
    private http: HttpClient,
  ) { }

  getPositions(): Observable<PositionsGET[]> {
    return this.http.get<PositionsGET[]>('https://prac-wyt-opr-backend.herokuapp.com/api/positions/')
  }
}
