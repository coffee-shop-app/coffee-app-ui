import { Component, OnInit } from '@angular/core';
import { CoffeeOrder } from '../models/coffeeOrder.model';
import { CoffeeService } from '../services/coffee.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  coffeeOrder:CoffeeOrder;

  constructor(private coffeeService:CoffeeService) { }

  ngOnInit() {
    this.coffeeOrder=new CoffeeOrder();
  }

  onSubmit(){
    console.dir(this.coffeeOrder);
    this.coffeeService.createOrder(this.coffeeOrder)
          .subscribe( data => {
            console.log("Order created successfully");
          });
  }

}
   