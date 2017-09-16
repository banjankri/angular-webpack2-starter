import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../../router.animations';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()]
})
export class MembersComponent implements OnInit {

    @HostBinding('@moveIn') get moveIn() {
        return '';
    }

  authState: any;
  lat: number = 51.678418;
  lng: number = 7.809007;
  state: string = '';

  constructor(public af: AngularFireAuth, private router: Router) {

    this.af.authState.subscribe(auth => {
      if (auth) {
        this.authState = auth;
      }
    });

  }

  logout() {
     this.af.auth.signOut();
     console.log('logged out');
     this.router.navigateByUrl('/login');
  }


  ngOnInit() {
  }

}