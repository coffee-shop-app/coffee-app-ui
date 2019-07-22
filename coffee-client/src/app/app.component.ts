import { Component } from '@angular/core';
import { Coffee } from './models/coffee.model';
import { CoffeeTypes } from './models/coffeeTypes.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

      coffees: Coffee[] = [
        {name: 'Latte', value: 'Café Latte'},
        {name: 'Cappuccino', value: 'Cappuccino'},
        {name: 'Espresso', value: 'Espresso'}
    ];

    types: CoffeeTypes[] = [
      {name: 'Latte', value: 'Latte'},
      {name: 'espresso', value: 'espresso'},
      {name: 'cappuccino', value: 'cappuccino'}
    ];
}
