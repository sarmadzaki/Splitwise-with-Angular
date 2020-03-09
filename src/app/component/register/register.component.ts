import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/Authentication/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errors: object = {};
  loader: boolean = false;
  constructor(private authServices: AuthenticationService) { }

  ngOnInit() {
    this.authServices.userData.subscribe(res => {
      console.log('res', res);
    })
  }

  Signup(form) {
    if (form.valid) {
      this.authServices.Signup(form.value);
    } else {
      console.log('form is not valid!!');
    }
  }
}
