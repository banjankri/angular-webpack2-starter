import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

import { AppState } from './../../reducers';
import { Activity } from './../../activity/activity.model';

@Component({
    templateUrl: './activities-list.component.html'
})
export class ActivitiesListComponent {
    activities$: Observable<Activity[]>;

    constructor(private store: Store<AppState>) {
        this.activities$ = store.select(state => state.activitiesState.activities);
    }
}
