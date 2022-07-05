import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setValue(name: string, value: string) {
    localStorage.setItem(name, value);
  }

  getValue(name: string) {
    return localStorage.getItem(name);
  }
}
