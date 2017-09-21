import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { routes } from './plants-list.routing';

import { PlantsListComponent } from './plants-list.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        PlantsListComponent
    ]
})
export class ActivitiesListModule { }
