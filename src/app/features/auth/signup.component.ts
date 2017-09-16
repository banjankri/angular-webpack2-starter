import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../../router.animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [moveIn(), fallIn()]
})

export class SignupComponent implements OnInit {

    @HostBinding('@moveIn') get moveIn() {
        return '';
    }

    state: string = '';
    error: any;

    constructor(public af: AngularFireAuth, private router: Router) {

    }

    onSubmit(formData) {
      if (formData.valid) {
        console.log(formData.value);
        this.af.auth.createUserWithEmailAndPassword(
          formData.value.email,
          formData.value.password
        ).then(
          (success) => {
          console.log(success);
          this.router.navigate(['/login']);
        }).catch(
          (err) => {
          console.log(err);
          this.error = err;
        });
      }
    }

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
}