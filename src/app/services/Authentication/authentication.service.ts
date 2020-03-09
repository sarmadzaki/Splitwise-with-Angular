import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import { CommonService } from '../commons/common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: Observable<firebase.User>;
  error: object = {};
  loader: boolean = false;

  constructor(public AF: AngularFireAuth, private router: Router, public commonServices: CommonService) {
    this.userData = AF.authState;

  }
  SignIn(email: string, password: string) {
    this.loader = true;
    this.AF
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        this.loader = false;
        this.router.navigate(['/'], {});
        // console.log('You are Successfully logged in!', res);
      })
      .catch(err => {
        this.error = {
          auth: err.message
        }
        this.loader = false;
        this.commonServices.snackBarToggle(err.message, 'dissmiss');
        console.log('Something is wrong:', err.message);
      });
  }
  Signup(form) {
    this.loader = true;
    this.AF
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(res => {
        res.user.updateProfile({
          displayName: form.fullname,
        });
        // this.SignIn(res.user.email, form.password);
        this.loader = false;
        this.router.navigate(['/'], {});
      }).catch(err => {
        this.loader = false;
        this.commonServices.snackBarToggle(err.message, 'dissmiss');
        console.log('something went wrong', err.message);
      })
  };

  Sigout() {
    this.AF.signOut().then(res => {
      // Sign-out successful.
      this.commonServices.snackBarToggle('Signed out successfully', 'dismiss');
      console.log('Sign-out successful.', res);
    }).catch(function (error) {
      // An error happened.
      this.commonServices.snackBarToggle(error.message, 'dismiss');
      console.log('An error happened.', error);
    });
  }
}
