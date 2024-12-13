import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ReportPageComponent } from './components/pages/report-page/report-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'search/:searchTerm', component:HomeComponent},
    {path:'tag/:tag', component:HomeComponent},
    {path:'report/:id', component:ReportPageComponent},
    {path:'login', component:HomeComponent},
    {path:'about', component:AboutPageComponent}
];
