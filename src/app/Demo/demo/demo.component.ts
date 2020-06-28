import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
   avrage:number=0;
  constructor() { }

  ngOnInit(): void {
    
    message:string:'WelCome';
    let demoArray: number[]=[2,5,6,3.5,4.5];
    let total:number=0;
    
    for(let demoArrVal of demoArray)
    {     
      console.log(demoArrVal);
      total=total+Number(demoArrVal);
    }
    this.avrage=total/demoArray.length;

   
  }

}

