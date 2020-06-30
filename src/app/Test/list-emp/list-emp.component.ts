import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/app.module';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})
export class ListEmpComponent implements OnInit {
  // id?: number;  
  // employee_name?: string;  
  // employee_salary?: number;  
  // employee_age?: number; 
  employees: Employee[]=[{id:1, employee_name:"Reddy", employee_salary:10000,employee_age:25}];  
  
  constructor(private empService: EmployeeService, private router: Router, ) { }  
  
  ngOnInit() {  
    // this.empService.getEmployees()  
    //   .subscribe((data: Employee[]) => {  
    //     this.employees = data;  
    //   });  
  }  
  deleteEmp(employee: Employee): void {  
    this.empService.deleteEmployees(employee.id)  
      .subscribe(data => {  
        this.employees = this.employees.filter(u => u !== employee);  
      })  
  }  
  editEmp(employee: Employee): void {  
    localStorage.removeItem('editEmpId');  
    localStorage.setItem('editEmpId', employee.id.toString());  
    this.router.navigate(['add-emp']);  
  }  
}
