import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShoppingItem } from '../../lib/models/shopping-item';
@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrl: './shopping-item.component.css'
})
export class ShoppingItemComponent {
  @Input({required:true}) item!: ShoppingItem

  @Output() methodEmitter: EventEmitter<void> = new EventEmitter<void>();

  handleMethod(){
    this.methodEmitter.emit();
  }

  handleDecrease() {
    this.item.decreaseQuantity();
    if(this.item.quantity <= 0) {
      this.handleMethod()
    }
  }
}
