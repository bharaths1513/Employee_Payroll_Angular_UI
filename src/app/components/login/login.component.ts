import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { error } from 'console';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials = {
    emailid:'',
    password:''
  }

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if((this.credentials.emailid!='' && this.credentials.password!='') && (this.credentials.emailid!=null && this.credentials.password!= null)){
      console.log("We have to submit the form to server");
      // to generate token 
      this.loginService.doLogin(this.credentials).subscribe(
        
        (response:any)=>{
          console.log(response)
          // this.loginService.loginUser(response.token)
          // window.location.href="/dashboard"
          localStorage.setItem("token",response.data)
          this.router.navigate(["/dashboard"])

        },
        errors=>{
        console.log(errors);

        }
      )


    }else{
      console.log("Fields are empty...!")
    }

  }

}
