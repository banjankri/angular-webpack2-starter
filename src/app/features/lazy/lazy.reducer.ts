import { Store, ActionReducer, Action } from '@ngrx/store';

import { AppState, createNewRootReducer } from './../../reducers';

import { LazyActions } from './lazy.actions';

export interface LazyState {
    counter: number;
}

const INITIAL_STATE: LazyState = {
    counter: 0
};

export function lazyReducer(state: LazyState = INITIAL_STATE, action: Action) {
    switch (action.type) {

        case LazyActions.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };

        case LazyActions.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };

        case LazyActions.RESET:
            return {
                ...state,
                counter: 0
            };

        default:
            return state;
    }
}

export interface AppStateWithLazy extends AppState {
    lazy: LazyState;
}

export class StoreWithLazy extends Store<AppStateWithLazy> { }

export function lazyStoreFactory(appStore: Store<AppState>) {
    appStore.replaceReducer(createNewRootReducer({ lazy: lazyReducer }));
    return appStore;
}
