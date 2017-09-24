import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

import { AppState } from './../../reducers';
import { Occurence } from './../../plant/occurence.model';
import { Plant } from './../../plant/plant.model';

@Component({
    templateUrl: './plant-details.component.html',
    styleUrls: ['./plant-details.component.css'],
})
export class PlantDetailsComponent {
    plant$: Observable<Plant>;
    occurences$: Observable<Occurence[]>;
    zoom: number = 2;

    constructor(private store: Store<AppState>) {
        this.plant$ = store.select(state => state.plantsState.currentPlant);
        this.occurences$ = store.select(state => state.plantsState.occurences);
    }
}
