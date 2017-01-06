import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {routing}        from './app.routing';

import {MaterialModule} from '@angular/material';

import {AlertComponent} from './_directives/index';
import {AuthGuard} from './_guards/index';
import {AlertService, AuthenticationService, UserService, SocketService} from './_services/index';
import {HomeComponent} from './home/index';
import {LoginComponent} from './login/index';
import {RegisterComponent} from './register/index';
import {FormComponent} from './form/form.component';
import { ArchiveComponent } from './archive/archive.component';
import { DataBaseComponent } from './data-base/data-base.component';

@NgModule({
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        FormComponent,
        ArchiveComponent,
        DataBaseComponent
    ],
    imports: [
        MaterialModule.forRoot(),
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        SocketService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
