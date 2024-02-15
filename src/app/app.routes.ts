import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './Pages/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './Pages/login/login.component';
import { CustomerDashboardComponent } from './Pages/customer-dashboard/customer-dashboard.component';
import { AddUserComponent } from './Pages/add-user/add-user.component';
import { GetAllConferencesComponent } from './Pages/Conference/get-all-conferences/get-all-conferences.component';
import { AddConferenceComponent } from './Pages/Conference/add-conference/add-conference.component';
import { GetAllConferencesadminComponent } from './Pages/Conference/get-all-conferencesadmin/get-all-conferencesadmin.component';
import { GetConferenceByidComponent } from './Pages/Conference/get-conference-byid/get-conference-byid.component';
import { GetConferenceBynameComponent } from './Pages/Conference/get-conference-byname/get-conference-byname.component';
import { GetConferenceByiduserComponent } from './Pages/Conference/get-conference-byiduser/get-conference-byiduser.component';

export const routes: Routes = [
    {
        path:'admindashboard',component:AdminDashboardComponent,
        children:[
            {path:'login',component:LoginComponent},
            {path:'addconference',component:AddConferenceComponent},
            {path:'getallconferencesadmin',component:GetAllConferencesadminComponent},
            {path:'search/:bid',component:GetConferenceByidComponent}

        ],
    },
    {path:'customerdashboard',
component:CustomerDashboardComponent,
children:[
    {path:'login',component:LoginComponent},
    {path:'getallconferences',component:GetAllConferencesComponent},
    {path:'getconferencebyname',component:GetConferenceBynameComponent},
    {path:'getconferencebyiduser',component:GetConferenceByiduserComponent}
],
},
{path:'',component:LoginComponent},
{path:'adduser',component:AddUserComponent},
{path:'login',component:LoginComponent}
];
