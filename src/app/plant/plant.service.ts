import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { GbifDataSourceService } from './../services/data-sources/gbif.datasource.service';
import { Plant } from './plant.model';

@Injectable()
export class PlantService {

    constructor(private ds: GbifDataSourceService) {

    }

    search(searchTerm: string): Observable<Plant[]> {
        return this.ds.searchPlantsByQuery(searchTerm);
    }

    plantOccurences(plant: Plant) {
        return this.ds.plantOccurences(plant.scientificName);
    }
}
