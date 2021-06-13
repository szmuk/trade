import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlertsPageRoutingModule } from './alerts-routing.module';
import { AlertsPage } from './alerts.page';

@NgModule({
  imports: [
    SharedModule,
    AlertsPageRoutingModule
  ],
  declarations: [AlertsPage]
})
export class AlertsPageModule { }
