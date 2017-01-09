import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { FormComponent } from './form/form.component';
import { ArchiveComponent } from './archive/archive.component';
import { DataBaseComponent } from './data-base/data-base.component';
import { HrModalComponent } from './hr-modal/hr-modal.component';

const appRoutes: Routes = [
    { path: '', component: FormComponent },
    { path: 'new', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'archive', component: ArchiveComponent, canActivate: [AuthGuard] },
    { path: 'db', component: DataBaseComponent, canActivate: [AuthGuard] },
    { path: 'modal-form', component: HrModalComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'new' }
];

export const routing = RouterModule.forRoot(appRoutes);