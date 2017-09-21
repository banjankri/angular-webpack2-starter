import { GbifDataSourceService } from './../services/data-sources/gbif.datasource.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { TransferHttp } from '../../modules/transfer-http/transfer-http';
import { go } from '@ngrx/router-store';

import { AppState } from '../reducers';
import { Store } from '@ngrx/store';
import { ActivityActions } from './../activity/activity.actions';
import { UserActions } from '../user/user.actions';
import { User } from '../user/user.model';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnDestroy, OnInit {

    destroyed$: Subject<any> = new Subject<any>();
    form: FormGroup;
    nameLabel = 'Enter your name';
    testSub$: Observable<string>;
    user: User;
    user$: Observable<User>;

    lat: number = 51.678418;
    lng: number = 7.809007;

    constructor(
      private fb: FormBuilder,
      private http: TransferHttp,
      private store: Store<AppState>,
      private userActions: UserActions,
      private activityActions: ActivityActions,
      private gbifDS: GbifDataSourceService,
    ) {
      this.form = fb.group({
        name: ''
      });
      this.user$ = this.store.select(state => state.user.user);
      this.user$.takeUntil(this.destroyed$)
        .subscribe(user => { this.user = user; });
    }

    ngOnInit() {
      this.form.get('name').setValue(this.user.name);
      if (UNIVERSAL) {
        this.testSub$ = this.http.get('http://localhost:8000/data').map(data => {
          return `${data.greeting} ${data.name}`;
        });
      }
    }

    clearName() {
      this.store.dispatch(this.userActions.editUser(
        Object.assign({}, this.user, { name: '' }
        )));

      this.form.get('name').setValue('');
    }

    logout() {
      this.store.dispatch(this.userActions.logout());
    }

    submitState() {
      this.store.dispatch(this.userActions.editUser(
        Object.assign({}, this.user, { name: this.form.get('name').value }
        )));
    }

    public searchTerm($event): void {
      this.store.dispatch(this.activityActions.search($event.searchTerm));
      this.store.dispatch(go(['/search'], { query: $event.searchTerm }));
    }

    ngOnDestroy() {
      this.destroyed$.next();
    }
}
