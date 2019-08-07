import { CoffeeName } from './CoffeeName.model';
import { CoffeeType } from './coffeeType.model';

export class CoffeeOrder{

    id:number;
    place:string;
    address:string;
    rating:number;
    coffeeName:CoffeeName;
    coffeeType:CoffeeType;  

    constructor(id:number=NaN,
                place:string="",
                address:string="",
                rating:number=NaN,
                coffeeName:CoffeeName=null,
                coffeeType:CoffeeType=null){
                this.id=id;
                this.place=place;
                this.address=address;
                this.rating=rating;
                this.coffeeName=coffeeName;
                this.coffeeType=coffeeType;
    }
} 