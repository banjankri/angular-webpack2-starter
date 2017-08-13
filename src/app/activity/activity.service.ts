import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Activity } from './activity.model';

@Injectable()
export class ActivityService {

    constructor(private db: AngularFireDatabase) {

    }

    search(searchTerm: string): FirebaseListObservable<Activity[]> {
        let query: {equalTo?} = {};

        if (searchTerm) {
            query.equalTo = {
                value: searchTerm ? searchTerm : null,
                key: 'name'
            };
        }

        return this.db.list('/activities', {
            query
        });
    }
}
