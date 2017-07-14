import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Activity } from './activity.model';

@Injectable()
export class ActivityService {

    constructor(private db: AngularFireDatabase) {

    }

    search(searchTerm: string): FirebaseListObservable<Activity[]> {
        return this.db.list('/actions', {
            query: {
                equalTo: {
                    value: searchTerm,
                    key: 'name'
                }
            }
        });
    }
}
