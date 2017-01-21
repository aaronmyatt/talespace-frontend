import { Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { RegistrationComponent } from '../components/auth/register/register.component';
import { LoginComponent } from '../components/auth/login/login.component';


// For clearity purpose will define
// application route here and export
// this object to rest of the app.
export const appRoutes: Routes = [
    { 
        path: '',
        component: HomeComponent
    }, 
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'register',
        component: RegistrationComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
]