import { Action } from '@ngrx/store';

import { Plant } from './plant.model';
import { PlantActions } from './plant.actions';

export interface PlantsState {
    plants: Plant[];
}

export const INITIAL_STATE: PlantsState = {
    plants: []
};

export function plantReducer(storeState: PlantsState = INITIAL_STATE, action: Action)
    : PlantsState {

    switch (action.type) {
        case PlantActions.PLANTS_LOADED:
            return {
                ...storeState,
                plants: action.payload
            };
        default:
            return storeState;
    }
}
