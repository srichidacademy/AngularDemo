import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 products:Product[]=[];
  constructor() { }

  ngOnInit(): void {
    this.products.push({ProductName:"Redmi Note 6 Pro",Category:"Mobile",Price:15999, Description:"Mi Brand",Availability:true});
    this.products.push({ProductName:"Shoes",Category:"Bata",Price:3000, Description:"BATA Company",Availability:false});
    this.products.push({ProductName:"SamSung",Category:"Laptop",Price:30000, Description:"SamSung",Availability:true});
    this.products.push({ProductName:"Titan Watch",Category:"Watch",Price:5000, Description:"Titan",Availability:false});
    this.products.push({ProductName:"Usha Fan",Category:"Fan",Price:2000, Description:"USHA",Availability:true});
  }

}
