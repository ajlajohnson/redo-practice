import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserPreferenceService {
  name: string = "Ajla";

  constructor() { }

  getName = () => {
    return this.name;
  }

  setName = (name: string) => {
    this.name = name;
  }

}
