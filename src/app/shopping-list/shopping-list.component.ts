import { Component } from '@angular/core';

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
  items: ShoppingItem[] = [];
  newItemText: string = '';

  addItem() {
    if (this.newItemText.trim()) {
      this.items.push({ name: this.newItemText, quantity: 1 });
      this.newItemText = '';
    }
  }

  increaseQuantity(item: ShoppingItem) {
    item.quantity++;
  }

  decreaseQuantity(item: ShoppingItem) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  removeItem(item: ShoppingItem) {
    this.items = this.items.filter(i => i !== item);
  }

  clearList() {
    this.items = [];
  }
}
