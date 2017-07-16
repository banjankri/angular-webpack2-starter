/* tslint:disable: max-line-length */
import { ComponentFixtureAutoDetect, ComponentFixture } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule, Store } from '@ngrx/store';
import { TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { TransferHttpModule } from './../../modules/transfer-http/transfer-http.module';
import {
  BrowserTransferStateModule
} from '../../modules/transfer-state/browser-transfer-state.module';

import { DashboardComponent } from './dashboard.component';
import { AppState, rootReducer } from './../reducers';
import { UserActions } from './../user/user.actions';

import 'rxjs/add/operator/takeUntil';
import * as sinon from 'sinon';

describe('Dashboard Component', () => {
    let fixture: ComponentFixture<DashboardComponent>,
        store: Store<AppState>,
        actions: UserActions,
        INITIAL_STATE: AppState = {
            router: {
                path: ''
            },
            user: {
                user: {
                    name: 'Artur',
                },
                loading: false,
                loaded: true
            },
            activitiesState: {
                activities: []
            }
        };

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            imports: [
                BrowserTransferStateModule,
                BrowserAnimationsModule,
                MaterialModule,
                ReactiveFormsModule,
                HttpModule,
                TransferHttpModule,
                StoreModule.provideStore(rootReducer, INITIAL_STATE),
            ],
            providers: [
                UserActions,
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ],
            declarations: [DashboardComponent]
        });

        fixture = TestBed.createComponent(DashboardComponent);
        store = fixture.debugElement.injector.get(Store);
        actions = fixture.debugElement.injector.get(UserActions);
    }));

    it('should contain welcome text', () => {
        // then
        expect(fixture.nativeElement).toContainText('Welcome to the Dashboard');
    });

    it('should present user name in the input if present', () => {
        // given
        let input = fixture.debugElement.query(By.css('input'));

        // then
        expect(input.nativeElement.value).toEqual('Artur');
    });

    it('should clear the input value when clear button is hit', () => {
        // given
        let input = fixture.debugElement.query(By.css('input')),
            clearBtn = fixture.debugElement.query(By.css('.clear-button'));

        // when
        clearBtn.triggerEventHandler('click', {});

        // then
        expect(input.nativeElement.value).toEqual('');
    });

    it('should dispatch an user edit action when clear button is hit', () => {
        // given
        spyOn(store, 'dispatch');
        let input = fixture.debugElement.query(By.css('input')),
            clearBtn = fixture.debugElement.query(By.css('.clear-button'));

        // when
        clearBtn.triggerEventHandler('click', {});

        // then
        expect(store.dispatch).toHaveBeenCalledWith({ type: '[User] Edit User', payload: { name: '' } });
    });
});
