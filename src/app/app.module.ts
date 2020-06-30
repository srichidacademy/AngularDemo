import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './Demo/demo/demo.component';
import { DemoArrayComponent } from './demo-array/demo-array.component';
import { ProductsComponent } from './products/products.component';
import { ListEmpComponent } from './Test/list-emp/list-emp.component';
import { AddEmpComponent } from './Test/add-emp/add-emp.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { EmployeeService } from './Test/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DemoArrayComponent,
    ProductsComponent,
    ListEmpComponent,
    AddEmpComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule   ,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
// Model  
export class Employee {  
    id?: number;  
    employee_name?: string;  
    employee_salary?: number;  
    employee_age?: number;  
}  