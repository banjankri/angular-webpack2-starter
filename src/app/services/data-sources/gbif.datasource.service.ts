import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class GbifDataSourceService {

    constructor(private http: Http) {
        // this.getEaxmpleOccurence();
    }

    getEaxmpleOccurence() {
        this.http.get(GbifDataSourceService.GBIF_API_URL + `occurrence/search?q=lophophora`)
            .map(res => res.json()).subscribe();
    }

    searchPlantsByQuery(query: string) {
        return this.errorWrapper(this.get(`species/search?q=${query}`)
                .map(res => res.json().results));
    }

    plantOccurences(scientificName: string) {
        return this.errorWrapper(this.get(`occurrence/search?scientificName=${scientificName}`)
            .map(res => res.json().results));
    }

    private errorWrapper(call: Observable<Response>) {
        return call.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    private get(url) {
        return this.http.get(GbifDataSourceService.GBIF_API_URL + url);
    }

    static get GBIF_API_URL(): string {
        return 'http://api.gbif.org/v1/';
    }
}
