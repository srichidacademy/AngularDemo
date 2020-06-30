import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './Demo/demo/demo.component';
import { DemoArrayComponent } from './demo-array/demo-array.component';
import { ProductsComponent } from './products/products.component';
import { AddEmpComponent } from './Test/add-emp/add-emp.component';
import { ListEmpComponent } from './Test/list-emp/list-emp.component';
import { AddProductComponent } from './add-product/add-product.component';


const routes: Routes = [
  {path:'demo',component:DemoComponent},
  {path:'demoArray',component:DemoArrayComponent},
  {path:'products',component:ProductsComponent},
  {path:'add-product',component:AddProductComponent},
  { path: 'list-emp', component: ListEmpComponent },  
  { path: 'add-emp', component: AddEmpComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
