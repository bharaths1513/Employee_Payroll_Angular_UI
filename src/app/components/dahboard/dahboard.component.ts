import { Component, OnInit } from '@angular/core';
import { Employeemodel } from 'src/app/model/employeemodel';
import { EmployeeFormService } from 'src/app/Services/employee-form.service';

@Component({
  selector: 'app-dahboard',
  templateUrl: './dahboard.component.html',
  styleUrls: ['./dahboard.component.scss']
})
export class DahboardComponent implements OnInit {

  employeedata : Employeemodel = new Employeemodel;
  EmployeesList:any;
  data:any;
  
  constructor(private employeeservice: EmployeeFormService) { }

  ngOnInit(): void {
    this.GetAllEmployees();
  }

  GetAllEmployees(){
    this.employeeservice.GetEmployees().subscribe(res=>{
      this.EmployeesList=res;
  })
}

   DeleteEmployee(employeeId:number){
     this.employeeservice.DeleteEmployee(employeeId).subscribe(res =>{
       alert("Employee Data Deleted..!")
     })
   }

  

}
