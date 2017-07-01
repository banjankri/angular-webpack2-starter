import { RouterState } from '@ngrx/router-store';

import { StoreState, INITIAL_STORE_STATE } from './store.state';
import { UiState, INITIAL_UI_STATE } from './ui.state';


export interface ApplicationState {
    router: RouterState;
    uiState: UiState;
    storeState: StoreState;
}

export const INITIAL_APPLICATION_STATE: ApplicationState = {
    router: {
        path: ''
    },
    uiState: INITIAL_UI_STATE,
    storeState: INITIAL_STORE_STATE
};
