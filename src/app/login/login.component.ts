import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  
  hide = true;
  
  constructor(){}
  email = new FormControl('', [Validators.required, Validators.email]);
  password=new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(25)])
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a vaild Email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getpassErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a vaild Password';
    }

    return this.password.hasError('password') ? 'Not a valid passsword' : '';
  }
}
