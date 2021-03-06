import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/Authentication/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authServices: AuthenticationService) { }

  ngOnInit() {
  }
  login(form) {
    const { email, password } = form.value;
    this.authServices.SignIn(email, password);
  }

}
