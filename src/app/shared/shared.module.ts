import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { CustomFormComponent } from './components/custom-form/custom-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SearchInputComponent,
    CustomButtonComponent,
    CustomFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchInputComponent,
    CustomButtonComponent
  ]
})
export class SharedModule { }
