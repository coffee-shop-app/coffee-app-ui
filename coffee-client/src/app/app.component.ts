import { Component } from '@angular/core';

import { CoffeeType } from './models/coffeeType.model';
import { CoffeeService } from './services/coffee.service';
import { CoffeeName } from './models/CoffeeName.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  coffeeNames:CoffeeName[]=[];
  coffeeTypes:CoffeeType[]=[];

  constructor(private coffeeService:CoffeeService){}

  ngOnInit() {
      this.coffeeService.getCoffeeNames().subscribe( data => {
        this.coffeeNames = data;
      });

      this.coffeeService.getCoffeeTypes().subscribe( data => {
        this.coffeeTypes = data;
      });
  };
    

}
