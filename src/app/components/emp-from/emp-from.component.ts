import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-emp-from',
  templateUrl: './emp-from.component.html',
  styleUrls: ['./emp-from.component.scss']
})
export class EmpFromComponent implements OnInit {

  minDate: Date;
  maxDate: Date;
  constructor() {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31); 
   }

  ngOnInit(): void {
  }

  employeesform = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[A-Z]{1}[a-zA-Z\\s]{2,}$')]),
    notes: new FormControl('', [Validators.required, Validators.minLength(10)]),
    profile: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    department: new FormControl('', [Validators.required]),
    salary: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
  })


  onsubmit() {
    var userData: any
    userData = localStorage.getItem('empdata');
    if (userData == null) {
      userData = []
      userData.push(JSON.stringify(this.employeesform.value))
    }
    else {
      JSON.parse(userData)
      console.log(userData)
      userData.push(JSON.stringify(this.employeesform.value))
    }  
    localStorage.setItem('empdata', userData)
  }
  departmentList: Array<any> = [
    {
      name: "HR",
      value: "HR"
    },
    {
      name: "Sales",
      value: "Sales"
    },
    {
      name: "Finance",
      value: "Finance"
    },
    {
      name: "Engineer",
      value: "Engineer"
    },
    {
      name: "Other",
      value: "Other"
    },
  ]
  get name() {
    return this.employeesform.get('name');
  }
  get notes() {
    return this.employeesform.get('notes');
  }
  get profile() {
    return this.employeesform.get('profile');
  }
  get gender() {
    return this.employeesform.get('gender')?.value;
  }
  get department() {
    return this.employeesform.get('department')?.value;
  }
  get salary() {
    return this.employeesform.get('salary');
  }
  get date() {
    return this.employeesform.get('date');
  }
}
