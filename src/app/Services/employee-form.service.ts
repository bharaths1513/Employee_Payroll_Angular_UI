import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeFormService {

  baseurl = "http://localhost:8080/employeePayrollservice"

  constructor(private http:HttpClient) { }

  AddEmployee(empData:any){
    return this.http.post<any>(`${this.baseurl}/create`,empData).pipe(map((res:any)=>{
      return res;
    }))
  }

  GetEmployees(){
    return this.http.get<any>(`${this.baseurl}/getallcontact`).pipe(map((res:any)=>{
      return res;
     } ))
  }

  DeleteEmployee(employeeId:number){
    return this.http.delete<any>(`${this.baseurl}/deletecontact/`+employeeId)
  }

  getCurrentData(employeeId:number){
    return this.http.get<any>(`${this.baseurl}/get/`+employeeId)
  }
  UpdateEmployee(employeeId:number,Employeemodel:any){
    return this.http.put(`${this.baseurl}/update/${employeeId}`,Employeemodel).pipe(map((res:any)=>{
      return res;
    }))
  }

  getPersonById(id:number){
    return this.http.get<any>(`${this.baseurl}/get/${id}`);
  }
    
  

}
