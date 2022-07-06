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

  addPosition(position: Omit<PositionsGET, "id">) {
    const body = {
      name: position.nazwa,
      salary: position.podstawa
    }
    return this.http.post(`https://prac-wyt-opr-backend.herokuapp.com/api/positions/`, body).toPromise()
  }

  updatePosition(position: PositionsGET) {
    const body = {
      id: position.id,
      name: position.nazwa,
      salary: position.podstawa
    }
    return this.http.put(`https://prac-wyt-opr-backend.herokuapp.com/api/positions/`, body).toPromise()
  }

  getPosition(id: string) {
    return this.http.get<PositionsGET>('https://prac-wyt-opr-backend.herokuapp.com/api/positions/' + id)
  }
}
