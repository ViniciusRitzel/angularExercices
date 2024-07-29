import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { CustomFormComponent } from './components/custom-form/custom-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingItem } from './lib/models/shopping-item';
import { ShoppingList } from "./lib/models/shopping-list";
import { ShoppingItemComponent } from './components/shopping-item/shopping-item.component';



@NgModule({
  declarations: [
    SearchInputComponent,
    CustomButtonComponent,
    CustomFormComponent,
    ShoppingItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchInputComponent,
    CustomButtonComponent,
    ShoppingItemComponent
  ]
})
export class SharedModule { }
