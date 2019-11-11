import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

import { AdminComponent } from './admin/admin.component';
import { SettingsComponent } from './settings/settings.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


const routes: Routes = [

  {
    path:"",
    component:AdminComponent,
    canActivate:[AuthGuard],
    children:[
    
    {
      path:"",
      canActivateChild:[AuthGuard],
      children:[
        
        {path:"admin-dashboard",component:AdminDashboardComponent},
        {path:"settings",component:SettingsComponent}
      ]
    }

  ]


  },
  {path:"settings",component:SettingsComponent},


];

@NgModule({
  //For submodules and lazy loaded submodules the module should be used as follows:
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
