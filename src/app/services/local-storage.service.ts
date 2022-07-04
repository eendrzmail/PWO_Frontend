import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setValue(name: string, value: string) {
    localStorage.setItem(name, JSON.stringify(value));
  }

  getValue(name: string) {
    localStorage.getItem(name);
  }
}
