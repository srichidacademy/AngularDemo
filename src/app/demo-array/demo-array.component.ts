import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-array',
  templateUrl: './demo-array.component.html',
  styleUrls: ['./demo-array.component.css']
})
export class DemoArrayComponent implements OnInit {
  animals:string[]=["Cat","Dog","Cow"];
  constructor() { }

  ngOnInit(): void {
this.animals.push("Rat");
this.animals.push("OX");
  for(let animal of this.animals){
    if(animal=='OX')
    {
      console.log("OX is there in the Animals");
    }    
    
  }

  }

}
