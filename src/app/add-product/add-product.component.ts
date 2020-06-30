import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router) { }
addForm:FormGroup;
  ngOnInit(): void {
    this.addForm=this.formBuilder.group({
      product_name: ['', Validators.required],
      product_category: ['', Validators.required],
      product_Description: [''],
      product_price: ['', Validators.required],
      prodct_availability: [true],
    });
  }

  onSubmit() {  
    
  }

}
