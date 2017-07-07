/* tslint:disable: max-line-length */
import { Component } from '@angular/core';
import { TestBed, async, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@angular/material';

import { SearchComponent } from './search.component';

describe('Search Component', () => {

    @Component({
        template: '<aya-search value="initial"></aya-search>'
    })
    class TestComponent {}

    beforeEach(() => {
        TestBed.configureTestingModule({
        imports: [
            BrowserAnimationsModule,
            MaterialModule
        ],
        providers: [],
        declarations: [SearchComponent, TestComponent]
        });
    });

    it('should contain placeholder', fakeAsync(() => {
        const fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        tick();

        const input = fixture.debugElement.query(By.css('input'));

        expect(input.nativeElement.placeholder).toEqual('What plant are you after?');
    }));

    it('should accept initial value as parameter', fakeAsync(() => {
        const fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        tick();

        const input = fixture.debugElement.query(By.css('input'));

        expect(input.nativeElement.value).toEqual('initial');
    }));

});
