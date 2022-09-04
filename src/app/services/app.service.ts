import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  tableRecords: any = [
    {
      "name": "Dennis Crane",
      "email": "mauris.nulla@google.edu",
      "country": "Netherlands",
      "postalZip": "491789"
    },
    {
      "name": "Macaulay Mcfadden",
      "email": "vel.vulputate@outlook.ca",
      "country": "Ireland",
      "postalZip": "333821"
    },
    {
      "name": "Unity Church",
      "email": "felis.nulla@yahoo.ca",
      "country": "Vietnam",
      "postalZip": "443537"
    },
    {
      "name": "Steel Nash",
      "email": "ornare.libero@yahoo.ca",
      "country": "Philippines",
      "postalZip": "413869"
    },
    {
      "name": "Merritt Jennings",
      "email": "nunc.mauris.elit@outlook.edu",
      "country": "Chile",
      "postalZip": "7609"
    }
  ]
  constructor() { }

  setItem(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  getItem(key: string) {
    return localStorage.getItem(key);
  }

  clearAll(): void {
    localStorage.clear();
  }
}
