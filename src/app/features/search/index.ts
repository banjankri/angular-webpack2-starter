import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { routes } from './activities-list.routing';

import { ActivitiesListComponent } from './activities-list.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        ActivitiesListComponent
    ]
})
export class ActivitiesListModule { }
