import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Car} from './models/car';
import {CarsService} from './cars.service';
import {Injectable} from '@angular/core';

@Injectable()

export class CarResolve implements Resolve<Car> {
  constructor(private carsService: CarsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.carsService.getCar(route.params.id);
  }
}
