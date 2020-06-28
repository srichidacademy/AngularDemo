import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './Demo/demo/demo.component';
import { DemoArrayComponent } from './demo-array/demo-array.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {path:'demo',component:DemoComponent},
  {path:'demoArray',component:DemoArrayComponent},
  {path:'products',component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
