import { style } from '@angular/animations';
import { Component, OnInit  } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'HELLSHOPv2';
  isDarkenable:boolean=false
  borderColor='black'
  toggle = true;
  status = 'Enable'; 
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  toggledark(){
    this.isDarkenable=!this.isDarkenable
    this.toggle = !this.toggle;
    
  }
  storethemelocal(){
    localStorage.setItem('Theme',this.isDarkenable? "dark": "light")
    localStorage.setItem('bgcolor',this.toggle ? 'lightbg' : 'darkbg');
  }
  ngOnInit(){
    this.isDarkenable=localStorage.getItem('Theme') ==='dark'? true:false;
    this.toggle=localStorage.getItem('bgcolor')==='lightbg'?true:false;
  }
}
