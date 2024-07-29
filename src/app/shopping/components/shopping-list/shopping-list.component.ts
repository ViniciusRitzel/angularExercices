import { Component, EventEmitter } from '@angular/core';
import { ShoppingList } from '../../../shared/lib/models/shopping-list';

interface ShoppingItem {
  name: string;
  quantity: number;
}

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})

export class ShoppingListComponent {
  shoppingList: ShoppingList = new ShoppingList()
}
