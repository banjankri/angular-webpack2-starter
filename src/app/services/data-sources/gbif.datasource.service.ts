import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class GbifDataSourceService {

    constructor(private http: Http) {
        this.getEaxmpleOccurence();
    }

    getEaxmpleOccurence() {
        this.http.get(GbifDataSourceService.GBIF_API_URL
            + `occurence/search?q=lophophora%20williamsi`)
        .map((res) => { console.error(res); return res.json(); }).subscribe();
    }

    static get GBIF_API_URL(): string {
        return 'http://api.gbif.org/v1/';
    }
}
