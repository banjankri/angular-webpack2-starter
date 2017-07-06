import { OnInit, Component, Input } from '@angular/core';

@Component({
    selector: 'aya-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

    @Input()
    public value;

    constructor() {
        console.log('search component!');
    }

    ngOnInit(): void {
    }
}
