import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'aya-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

    @Input()
    public value: string;

    @Output()
    public search: EventEmitter<any> = new EventEmitter();

    constructor() {
        console.log('search component!');
    }

    ngOnInit(): void {
    }

    onClick(searchTerm: string): void {
        this.search.emit({searchTerm});
    }
}
