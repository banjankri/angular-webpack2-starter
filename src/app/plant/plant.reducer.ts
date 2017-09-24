import { Action } from '@ngrx/store';

import { Plant } from './plant.model';
import { Occurence } from './occurence.model';
import { PlantActions } from './plant.actions';

export interface PlantsState {
    plants: Plant[];
    currentPlant: Plant;
    occurences: Occurence[];
}

export const INITIAL_STATE: PlantsState = {
    plants: [],
    currentPlant: {
    },
    occurences: []
};

export function plantReducer(storeState: PlantsState = INITIAL_STATE, action: Action)
    : PlantsState {

    switch (action.type) {
        case PlantActions.PLANTS_LOADED:
            return {
                ...storeState,
                plants: action.payload
            };
        case PlantActions.OCCURENCES_LOADED:
            return {
                ...storeState,
                occurences: action.payload
            };
        case PlantActions.PLANT_SELECTED:
            return {
                ...storeState,
                currentPlant: action.payload
            };
        default:
            return storeState;
    }
}
