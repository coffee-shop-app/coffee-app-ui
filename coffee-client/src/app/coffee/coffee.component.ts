import { Component, OnInit } from '@angular/core';
import { CoffeeOrder } from '../models/coffeeOrder.model';
import { CoffeeService } from '../services/coffee.service';
import { CoffeeName } from '../models/CoffeeName.model';
import { CoffeeType } from '../models/coffeeType.model';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  coffeeOrder:CoffeeOrder;
  coffeeNames:CoffeeName[]=[];
  coffeeTypes:CoffeeType[]=[];

  constructor(private coffeeService:CoffeeService) { }

  ngOnInit() {
    this.coffeeOrder=new CoffeeOrder();
    this.coffeeService.getCoffeeNames().subscribe( data => {
      this.coffeeNames = data;
    });

    this.coffeeService.getCoffeeTypes().subscribe( data => {
      this.coffeeTypes = data;
    });
  }

  onSubmit(){
    console.dir(this.coffeeOrder);
    this.coffeeService.createOrder(this.coffeeOrder)
          .subscribe( data => {
            console.log("Order created successfully");
          });
  }

}
   