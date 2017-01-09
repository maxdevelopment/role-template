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
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'form', component: FormComponent },
    { path: 'archive', component: ArchiveComponent },
    { path: 'db', component: DataBaseComponent },
    { path: 'modal-form', component: HrModalComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);