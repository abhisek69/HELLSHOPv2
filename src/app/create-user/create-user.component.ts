import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  hide = true;
  phoneNumber= new FormControl('',[Validators.required , Validators.minLength(10) ,Validators.maxLength(10)])
}
