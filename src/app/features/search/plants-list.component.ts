import { go } from '@ngrx/router-store';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

import { PlantActions } from './../../plant/plant.actions';
import { AppState } from './../../reducers';
import { Plant } from './../../plant/plant.model';

@Component({
    templateUrl: './plants-list.component.html'
})
export class PlantsListComponent {
    plants$: Observable<Plant[]>;

    constructor(private store: Store<AppState>, private plantActions: PlantActions) {
        this.plants$ = store.select(state => state.plantsState.plants);
    }

    plantSelected(plant: Plant, $event: Event) {
        this.store.dispatch(this.plantActions.plantSelected(plant));
        this.store.dispatch(go(['/details']));

        $event.preventDefault();
    }
}
