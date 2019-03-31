import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Car} from './models/car';
import {Http} from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: Http) { }

  getCars(): Observable<Car[]> {
    return this.http.get('http://localhost:3000/api/cars')
            .map((res) => res.json());
  }
}
