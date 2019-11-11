import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { SettingsComponent } from './settings/settings.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [AdminComponent, SettingsComponent, AdminDashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports:[
    AdminComponent
  ]
})
export class AdminModule { }
