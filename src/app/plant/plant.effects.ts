/* tslint:disable: member-ordering */

import { Store } from '@ngrx/store';
import { go } from '@ngrx/router-store';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import { PlantService } from './plant.service';
import { PlantActions } from './plant.actions';

@Injectable()
export class PlantEffects {
    constructor(
        private actions$: Actions,
        private plantService: PlantService,
        private plantActions: PlantActions
    ) {

    }

    @Effect() search = this.actions$.ofType(PlantActions.SEARCH)
        .map(action => action.payload)
        .switchMap(searchTerm => this.plantService.search(searchTerm))
        .map(activities => {
            return this.plantActions.plantsLoaded(activities);
        });
}
