import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormArray,FormBuilder} from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ActivatedRoute, Router } from '@angular/router';
import { Employeemodel } from 'src/app/model/employeemodel';
import { EmployeeFormService } from 'src/app/Services/employee-form.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  // employeesform!:FormGroup
  id!:number;
  employeedata : Employeemodel = new Employeemodel;
  selectedDepartments = <any>[];
  EmployeesList:any;


   constructor(private formbuilder:FormBuilder,  private employeeservice:EmployeeFormService,private route : ActivatedRoute, private router:Router) { }

   employeesform = this.formbuilder.group({
    name:['',(Validators.required,Validators.pattern('^[A-Z]{1}[a-zA-Z\\s]{2,}$'))],
    gender:[''],
    profile:[''],
    department: this.formbuilder.array([], [Validators.required]),
    salary:[''],
    // date:[''],
    emailId:[''],
    password:[''],
    notes:['']
  })
  ngOnInit(): void {
  

    this.id = this.route.snapshot.params['id']
    this.employeeservice.getPersonById(this.id).subscribe(
      data=>{ this.employeedata = data},
      error=>{ console.log(error)}
    )

    // this.FetchSelectedDepartments();

    
  }

  departments: Array<any> = [
    {
      name: "HR",
      value: "HR",
      checked: false

    },
    {
      name: "Sales",
      value: "Sales",
      checked: false
    },
    {
      name: "Finance",
      value: "Finance",
      checked: false
    },
    {
      name: "Engineer",
      value: "Engineer",
      checked: false
    },
    {
      name: "Other",
      value: "Other",
      checked: false
    },
  ]


  // changeSelection(){
  //   this.FetchSelectedDepartments();
  // }

  // FetchSelectedDepartments(){
  //   this.selectedDepartments = this.departmentList.filter((value)=>{
  //     console.log(value);
      
  //     return value.isChecked

  //   });
  // }

  onCheckboxChange(event: MatCheckboxChange) {
    const department: FormArray = this.employeesform.get('department') as FormArray;

    if (event.checked) {
      department.push(new FormControl(event.source.value));
    } else {
      const index = department.controls.findIndex(x => x.value === event.source.value);
      department.removeAt(index);
    }
  }

  get name() {
    return this.employeesform.get('name');
  }
  get notes() {
    return this.employeesform.get('notes');
  }


  // get name() {
  //   return this.employeesform.get('name');
  // }
  // get notes() {
  //   return this.employeesform.get('notes');
  // }


  // getEmployeedata(employeeId:number){
  //   this.employeeservice.getCurrentData(this.router.snapshot.params['employeeId']).subscribe((result)=>{
  //     // this.employeesform = new FormGroup({
  //     //   name: new FormControl(result['name']),
  //     //   gender: new FormControl(result['gender'])
  //     // })
      
  //   })
  // }
  updateemployee(){
   //this.employeedata.employeeId = this.employeesform.value.employeeId
  

    this.employeedata.name = this.employeesform.value.name;
    this.employeedata.gender = this.employeesform.value.gender;
    this.employeedata.profilePic = this.employeesform.value.profile;
    this.employeedata.emailId = this.employeesform.value.emailId;
    this.employeedata.password = this.employeesform.value.password;
    // this.employeedata.startDate = this.employeesform.value.date;
    this.employeedata.department = this.employeesform.value.department;
    this.employeedata.salary = this.employeesform.value.salary;
    this.employeedata.note = this.employeesform.value.notes;

    this.employeeservice.UpdateEmployee(this.id, this.employeedata).subscribe( 
      res=>{  console.log(res)
        alert("Employee Data Added Successfully");
        this.employeesform.reset();
        this.router.navigate(["/dashboard"])
      },
      error=>{ console.log(error)
        alert("Failed to Save Employee Data...!")
      }
    );
    // this.employeeservice.UpdateEmployee(this.employeedata.employeeId,this.employeedata).subscribe(res=>{
    //   alert("Employee Data Updated Successfully")
    // },
    // err=>{
    //   console.log(err)
    //   alert("Failed to  Employee Data...!")
    // })
    
  }

  goToDashboard(){
    this.router.navigate(['/dashboard'])
  }
  // employeedata : Employeemodel = new Employeemodel;
 
  // constructor(private service: EmployeeFormService, private route : ActivatedRoute, private router:Router ) { }

  // ngOnInit(): void {
    
  // }

  // onSubmit(){
   
  // }

  // DisplayEmployee(data:any){
  //   this.employeesform.controls['name'].setValue(data.name);
  //   this.employeesform.controls['gender'].setValue(data.gender);
  //   this.employeesform.controls['profile'].setValue(data.profile);
  //   this.employeesform.controls['department'].setValue(data.department);
  //   this.employeesform.controls['salary'].setValue(data.salary);
  //   this.employeesform.controls['emailId'].setValue(data.emailId);
  //   this.employeesform.controls['password'].setValue(data.password);

  //   this.employeesform.controls['notes'].setValue(data.notes);


  // }
 
 

}



