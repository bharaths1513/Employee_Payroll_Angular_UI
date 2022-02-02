import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormArray,FormBuilder} from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { RouterLink } from '@angular/router';
import { Employeemodel } from 'src/app/model/employeemodel';
import { EmployeeFormService } from 'src/app/Services/employee-form.service';
import { UpdateComponent } from '../update/update.component';


@Component({
  selector: 'app-emp-from',
  templateUrl: './emp-from.component.html',
  styleUrls: ['./emp-from.component.scss']
})
export class EmpFromComponent implements OnInit {

  minDate: Date;
  maxDate: Date;

  employeesform!:FormGroup
  employeedata : Employeemodel = new Employeemodel;
  EmployeesList:any;
  
  selectedDepartments = <any>[];
  // departmentList:any;


  constructor(private employeeservice: EmployeeFormService, private formbuilder:FormBuilder ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  ngOnInit(): void {
    this.employeesform = this.formbuilder.group({

      name:['',(Validators.required,Validators.pattern('^[A-Z]{1}[a-zA-Z\\s]{2,}$'))],
      gender:[''],
      profile:[''],
      department: this.formbuilder.array([]) ,
      salary:[''],
      // date:[''],
      emailId:[''],
      password:[''],
      notes:['']
    })

    this.FetchSelectedDepartments();

    // console.log(this.data);
    // if (this.data != null) {
    //   const department: FormArray = this.employeesform.get('departmentList') as FormArray;
    //   this.employeesform.patchValue({
    //     name: this.data.name,
    //     profilePic: this.data.profilePic,
    //     gender: this.data.gender,
    //     salary: this.data.salary,
    //     note: this.data.note,
    //     startDate: this.data.startDate,
    //   });
    //   const departmentList: FormArray = this.employeesform.get('departments') as FormArray;
 
    //     this.data.departments.forEach((departmentElements: any) => {
    //       for (let index = 0; index < this.departmentList.length; index++) {
    //         if (this.departmentList[index].name == departmentElements) {
    //           this.departmentList[index].checked = true;
    //           departmentList.push(new FormControl(this.departmentList[index].value));
    //         }
    //       }
    //     });
    // }
  

  }


  departmentList= [
    {
      name: "HR",
      value: "HR",
      isChecked: false
    },
    {
      name: "Sales",
      value: "Sales",
      isChecked: false
    },
    {
      name: "Finance",
      value: "Finance",
      isChecked: false
    },
    {
      name: "Engineer",
      value: "Engineer",
      isChecked: false
    },
    {
      name: "Other",
      value: "Other",
      isChecked: false
    },
  ]


  changeSelection(){
    this.FetchSelectedDepartments();
  }

  FetchSelectedDepartments(){
    this.selectedDepartments = this.departmentList.filter((value)=>{
      console.log(value);
      
      return value.isChecked

    });
  }


  // employeesform = new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.pattern('^[A-Z]{1}[a-zA-Z\\s]{2,}$')]),
  //   notes: new FormControl('', [Validators.required, Validators.minLength(10)]),
  //   profile: new FormControl('', [Validators.required]),
  //   gender: new FormControl('', [Validators.required]),
  //   department: new FormControl('', [Validators.required]),
  //   salary: new FormControl('', [Validators.required]),
  //   date: new FormControl('', [Validators.required]),
  // })

 
  get name() {
    return this.employeesform.get('name');
  }
  get notes() {
    return this.employeesform.get('notes');
  }
  // get profile() {
  //   return this.employeesform.get('profile');
  // }
  // get gender() {
  //   return this.employeesform.get('gender')?.value;
  // }
  // get department() {
  //   return this.employeesform.get('department')?.value;
  // }
  // get salary() {
  //   return this.employeesform.get('salary');
  // }
  // get date() {
  //   return this.employeesform.get('date');
  // } 
  
  // onCheckboxChange(event: MatCheckboxChange) {
  //   const department: FormArray = this.employeesform.get('departmentList') as FormArray;

  //   if (event.checked) {
  //     department.push(new FormControl(event.source.value));
  //   } else {
  //     const index = department.controls.findIndex(x => x.value === event.source.value);
  //     department.removeAt(index);
  //   }
  // }


  // onCheckboxChange(event:any) {
  //   const department: FormArray = this.employeesform.get('departmentList') as FormArray;

  //   if (event.checked) {
  //     department.push(new FormControl(event.source.value));
  //   } else {
  //     const index = department.controls.findIndex(x => x.value === event.source.value);
  //     department.removeAt(index);
  //   }

  // }
    
  //   console.log(this.departmentList[event])
  //   console.log(event.source.value);

  //   return event.source.value;
    
  // }


  // onsubmit() {
  //   if ((this.empData.emailId != '' && this.empData.password != '') && (this.empData.emailId != null && this.empData.password!= null)) {
  //     console.log("We have to submit the form to server");
  //     // to generate token 
  //     this.employeeservice.AddEmployee(this.empData).subscribe(

  //       (response: any) => {
  //         console.log(response)
  //         // this.loginService.loginUser(response.token)
  //         window.location.href = "/dashboard"
  //       },
  //       errors => {
  //         console.log(errors);

  //       }
  //     )
  //   } else {
  //     console.log("Fields are empty...!")
  //   }


  //   // var obj = JSON.stringify(this.employeesform.value);

  //   //   var array : any;
  //   //   let obj1 = localStorage.getItem('empdata');
  //   //   if(obj1 != null){
  //   //     array = JSON.parse(obj1)
  //   //   }
  //   //   else{
  //   //     array = [];
  //   //   }
  //   //   array.push(obj);
  //   //   localStorage.setItem('empdata',JSON.stringify(array))

  // }

  addemployee(){

   
 // this.employeedata.employeeId = this.employeesform.value.employeeId
    this.employeedata.name = this.employeesform.value.name;
    this.employeedata.gender = this.employeesform.value.gender;
    this.employeedata.profilePic = this.employeesform.value.profile;
    this.employeedata.emailId = this.employeesform.value.emailId;
    this.employeedata.password = this.employeesform.value.password;
    // this.employeedata.startDate = this.employeesform.value.date;
    this.employeedata.department = this.employeesform.value.department;
    this.employeedata.salary = this.employeesform.value.salary;
    this.employeedata.note = this.employeesform.value.notes;


    this.employeeservice.AddEmployee(this.employeedata).subscribe(res=>{
      console.log(res)
      alert("Employee Data Added Successfully");
      this.employeesform.reset();

    },
    err=>{
      console.log(err)
      alert("Failed to Save Employee Data...!")
    })
  }
    
}


