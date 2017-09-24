import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

import { AppState } from './../../reducers';
import { Plant } from './../../plant/plant.model';

@Component({
    templateUrl: './plant-details.component.html'
})
export class PlantDetailsComponent {
    plant$: Observable<Plant>;

    constructor(private store: Store<AppState>) {
        this.plant$ = store.select(state => state.plantsState.currentPlant);
    }
}
