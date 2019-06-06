import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Car} from '../models/car';
import {TotalCostComponent} from '../total-cost/total-cost.component';
import {CarsService} from '../cars.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit {
  @ViewChild('totalCostRef') totalCostRef: TotalCostComponent;

  totalCost: number;
  grossCost: number;

  cars: Car[] = [];


  constructor(private carsService: CarsService, private router: Router) {
  }

  ngOnInit() {
    this.loadCars();

  }

  async goToCarDetails(car: Car) {
    await this.router.navigate(['/cars', car.id]);
  }

  loadCars(): void {
    this.carsService.getCars().subscribe(cars => {
      this.cars = cars;
      this.calculateTotalCost();
    });
  }

  showGross() {
    this.totalCostRef.showGross();
  }

  calculateTotalCost(): void {
    this.totalCost = this.cars
      .map(car => car.cost)
      .reduce((prev, next) => prev + next);
  }

  onShownGross(grossCost: number): void {
    this.grossCost = grossCost;
  }

}
