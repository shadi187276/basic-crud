import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ManuComponent } from './manu/manu.component';
import { NavComponent } from './nav/nav.component';
import { ProductsComponent } from './products/products.component';
import { ProductsCreateComponent } from './products-create/products-create.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AdminComponent,
    ManuComponent,
    NavComponent,
    ProductsComponent,
    ProductsCreateComponent,
    ProductsEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class AdminModule { }
