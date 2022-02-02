import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DahboardComponent } from './components/dahboard/dahboard.component';
import { EmpFromComponent } from './components/emp-from/emp-from.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateComponent } from './components/update/update.component';
import { AuthGuard } from './Services/auth.guard';

const routes: Routes = [
  {path: "", component:LoginComponent},
  {path : "empLogin", component : EmpFromComponent},
  {path : "dashboard", component : DahboardComponent },
  {path : "login", component : LoginComponent },
  {path : "update/:id" , component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
