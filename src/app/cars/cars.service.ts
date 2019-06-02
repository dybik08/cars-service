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
  private apiUrl = 'http://localhost:3000/api/cars';

  constructor(private http: Http) { }

  getCars(): Observable<Car[]> {
    return this.http.get(this.apiUrl)
            .map((res) => res.json());
  }

  getCar(id: number): Observable<Car> {
    return this.http.get(`${this.apiUrl}/${id}`)
            .map((res) => res.json());
  }
}
