import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

import { AppState } from './../../reducers';
import { Plant } from './../../plant/plant.model';

@Component({
    templateUrl: './plants-list.component.html'
})
export class PlantsListComponent {
    plants$: Observable<Plant[]>;

    constructor(private store: Store<AppState>) {
        this.plants$ = store.select(state => state.plantsState.plants);
    }
}
