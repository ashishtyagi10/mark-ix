import { Injectable } from '@angular/core';
import {MyPosition} from './MyPosition';

@Injectable({
  providedIn: 'root'
})
export class MypositionService {
  position: MyPosition[] = [];

  constructor() { }

  getAllPositions() {
    for (let i = 0 ; i < 2000; i++) {
      this.position.push(
        {
          id: i,
          cusip: Math.random().toString(36).substr(2, 9),
          isin: Math.random().toString(36).substr(2, 12),
          desc: Math.random().toString(36).substr(2, 25),
          mDate: new Date(+(new Date()) - Math.floor(Math.random() * 10000000000)),
          our: Math.random(),
          outside: Math.random(),
          random: Math.random()});
    }
    console.log(this.position.length);
    return this.position;
  }
}
