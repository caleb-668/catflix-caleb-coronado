import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WatchingComponent } from './watching/watching.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'watch',
        component: WatchingComponent,
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard], 
        /* children: [
            {
                path: 'profile',
            },
            {
                path: 'tables',
            },
        ] */
    },
];
