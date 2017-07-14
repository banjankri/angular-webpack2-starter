import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { Activity } from './activity.model';

@Injectable()
export class ActivityActions {

    static SEARCH = 'ACTIVITY_SEARCH';

    static ACTIVITIES_LOADED = 'ACTIVITIES_LOADED';

    search(searchTerm: string): Action {
        return {
            type: ActivityActions.SEARCH,
            payload: searchTerm
        };
    }

    activitiesLoaded(activities: Activity[]) {
        return {
            type: ActivityActions.ACTIVITIES_LOADED,
            payload: activities
        };
    }
}
