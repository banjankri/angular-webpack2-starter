import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    constructor(public dialogRef: MdDialogRef<LoginComponent>) {

    }
}
