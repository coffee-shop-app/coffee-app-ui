import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoffeeName } from '../models/CoffeeName.model';
import { CoffeeType } from '../models/coffeeType.model';
import { CoffeeComponent } from '../coffee/coffee.component';
import { CoffeeOrder } from '../models/coffeeOrder.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  @Injectable()
  export class CoffeeService {
  
    constructor(private http:HttpClient) {}
  
    private serviceUrl = 'http://localhost:8081';
    //private userUrl = '/api';
  
    public getCoffeeNames() {
      return this.http.get<CoffeeName[]>(this.serviceUrl+"/data/coffee/names");
    }

    public getCoffeeTypes() {
      return this.http.get<CoffeeType[]>(this.serviceUrl+"/data/coffee/types");
    }
   
    public createOrder(order:CoffeeOrder) {
      return this.http.post<CoffeeOrder>(this.serviceUrl+"/coffee", order);
    }
  
  }