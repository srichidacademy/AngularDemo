import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstAngularProject';
 
  // TypeScript Variables 
  found: boolean=false;
  grade:number=22.6;
  firstName:string='Gangireddy';
  lastName:string="G";

  // fullName:string=this.firstName+" "+this.lastName;

  fullName:string=`${this.firstName} ${this.lastName}`;

  
}
