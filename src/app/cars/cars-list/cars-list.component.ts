import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Car} from '../models/car';
import {TotalCostComponent} from '../total-cost/total-cost.component';
import {CarsService} from '../cars.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
  carForm: FormGroup;

  cars: Car[] = [];


  constructor(
    private carsService: CarsService,
    private router: Router,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.loadCars();
    this.carForm = this.buildCarForm();
  }

  buildCarForm() {
    return this.formBuilder.group({
        model: ['', Validators.required],
        plate: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(7)]],
        deliveryDate: '',
        deadline: '',
        color: '',
        power: '',
        clientFirstName: '',
        clientSurname: '',
        cost: '',
        isFullyDamaged: '',
        type: '',
        year: ''
    });
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

  addCar() {
    this.carsService.addCar(this.carForm.value).subscribe(() => {
      this.loadCars();
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
