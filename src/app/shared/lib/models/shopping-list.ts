import { ShoppingItem } from "./shopping-item";

export class ShoppingList {
  items: ShoppingItem[] = [];
  isInputNotEmpty: boolean = false;

  addItem(value: string) {
    if (value.trim()){
      const existingItem = this.items.find(item => item.name.toLowerCase() === value.trim().toLowerCase());

      if(existingItem){
        existingItem.increaseQuantity()
      }
      else{
        this.items.push(new ShoppingItem(value, 1));

      }
      value = '';
    }
  }

  onInput(value: string){
    this.isInputNotEmpty = value.trim().length > 0;
  }

  itemExists(value: string): boolean {
    return this.items.some(item => item.name.toLowerCase() === value.trim().toLowerCase())
  }

  removeItem(item: ShoppingItem) {
    this.items = this.items.filter(i => i !== item);
  }

  clearList() {
    this.items = [];
  }
}
