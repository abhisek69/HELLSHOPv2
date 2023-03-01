import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginBtnComponent } from './login-btn/login-btn.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [  
{path:"login", component:LoginComponent},
{path:"createUser", component:CreateUserComponent},
{path:'loginbtn', component:LoginBtnComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
