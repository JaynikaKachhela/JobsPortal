import { provideRouter, RouterConfig }  from '@angular/router';
import {NewJobcomponent}from './Admin/newJob'
import {JobComponent}from './EndUser/jobs'



const routes: RouterConfig = [
    
    {
        path: 'newJob',
        component: NewJobcomponent
    },

    {
        path: 'jobs',
        component: JobComponent
    },
    
];

export const appRouterProviders = [
    provideRouter(routes)
];