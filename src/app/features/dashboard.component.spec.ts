/* tslint:disable: max-line-length */
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { TransferHttpModule } from './../../modules/transfer-http/transfer-http.module';
import {
  BrowserTransferStateModule
} from '../../modules/transfer-state/browser-transfer-state.module';

import { DashboardComponent } from './dashboard.component';
import { rootReducer } from '../reducers';
import { UserActions } from './../user/user.actions';

import 'rxjs/add/operator/takeUntil';
import * as sinon from 'sinon';

describe('Dashboard Component', () => {
    let fixture,
        userActionsStub;

    beforeEach(async(() => {
        userActionsStub = sinon.createStubInstance(UserActions);

        TestBed.configureTestingModule({
            imports: [
                BrowserTransferStateModule,
                BrowserAnimationsModule,
                MaterialModule,
                ReactiveFormsModule,
                HttpModule,
                TransferHttpModule,
                StoreModule.provideStore(rootReducer, {

                }),
            ],
            providers: [
                { provide: UserActions, useValue: userActionsStub},
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ],
            declarations: [DashboardComponent]
        });

        fixture = TestBed.createComponent(DashboardComponent);
    }));

    it('should contain welcome text', async(() => {
        expect(fixture.nativeElement).toContainText('Welcome to the Dashboard');
    }));

    it('should present users name in the input if present', async(() => {

    }));
});
