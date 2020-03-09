import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/Authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'splitwise';
  userData: object = {};
  constructor(private authServices: AuthenticationService) {
    
  }
  ngOnInit() {
    this.authServices.userData.subscribe(res => {
      this.userData = res
    });
  }
}
