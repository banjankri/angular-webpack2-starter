import { MdDialogRef } from '@angular/material';
import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn } from '../../router.animations';
import * as firebaseApp from 'firebase/app';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    animations: [moveIn()]
})
export class LoginComponent {

    @HostBinding('@moveIn') get moveIn() {
        return '';
    }

    error: any;

    constructor(public af: AngularFireAuth, private router: Router) {
            this.af.authState.subscribe(auth => {
                if (auth) {
                  this.router.navigateByUrl('/members');
                }
            });
    }

    loginFb() {
        this.af.auth.signInWithPopup(new firebaseApp.auth.FacebookAuthProvider()).then(
            (success) => {
            this.router.navigate(['/members']);
          }).catch(
            (err) => {
            this.error = err;
          });
      }

      loginGoogle() {
        this.af.auth.signInWithPopup(new firebaseApp.auth.GoogleAuthProvider()).then(
            (success) => {
            this.router.navigate(['/members']);
          }).catch(
            (err) => {
            this.error = err;
          });
      }
}
