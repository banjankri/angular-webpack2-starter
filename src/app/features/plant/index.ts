import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { routes } from './plant-details.routing';

import { PlantDetailsComponent } from './plant-details.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        PlantDetailsComponent
    ]
})
export class PlantDetailsModule { }
