import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DahboardComponent } from './components/dahboard/dahboard.component';
import { EmpFromComponent } from './components/emp-from/emp-from.component';

const routes: Routes = [
  {path: "", component:DahboardComponent},
  {path : "empLogin", component : EmpFromComponent},
  {path : "dashboard", component : DahboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
