import { Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { RegistrationComponent } from '../components/auth/register/register.component';
import { LoginComponent } from '../components/auth/login/login.component';
import { ProfileComponent } from '../components/profile/profile.component';


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
    },
    {
        path: 'profile',
        component: ProfileComponent
    }
];
