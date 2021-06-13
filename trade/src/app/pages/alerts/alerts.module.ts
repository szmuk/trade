import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlertsPageRoutingModule } from './alerts-routing.module';
import { AlertsPage } from './alerts.page';
import { RecentAlertsComponent } from './recent-alerts/recent-alerts.component';
import { TrendingTickersComponent } from './trending-tickers/trending-tickers.component';

@NgModule({
  imports: [
    SharedModule,
    AlertsPageRoutingModule
  ],
  declarations: [
    TrendingTickersComponent,
    RecentAlertsComponent,
    AlertsPage
  ]
})
export class AlertsPageModule { }
