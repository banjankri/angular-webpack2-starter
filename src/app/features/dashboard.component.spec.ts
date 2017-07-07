/* tslint:disable: max-line-length */
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

describe('Dashboard Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
        imports: [
            BrowserTransferStateModule,
            BrowserAnimationsModule,
            MaterialModule,
            ReactiveFormsModule,
            HttpModule,
            TransferHttpModule,
            StoreModule.provideStore(rootReducer),
        ],
        providers: [
            UserActions,
        ],
        declarations: [DashboardComponent]
        });
    });

    it('should contain welcome text', async(() => {
        const fixture = TestBed.createComponent(DashboardComponent);
        fixture.detectChanges();
        expect(fixture.nativeElement).toContainText('Welcome to the Dashboard');
    }));

});
