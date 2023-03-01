import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';
@Component({
  selector: 'app-login-btn',
  templateUrl: './login-btn.component.html',
  styleUrls: ['./login-btn.component.scss']
})
export class LoginBtnComponent {
  hidden=true;
hide(){
  this.hidden=!this.hidden;
}
}
