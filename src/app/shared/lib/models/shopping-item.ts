export class ShoppingItem {

  constructor( public name:string, public quantity:number){
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    
      this.quantity--;

  }
}
