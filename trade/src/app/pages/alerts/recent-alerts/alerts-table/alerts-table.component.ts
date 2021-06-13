import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Alert } from 'src/app/core/models/alert';
import { AlertsService } from 'src/app/core/state/alerts/alerts.service';

@Component({
  selector: 'app-alerts-table',
  templateUrl: './alerts-table.component.html',
  styleUrls: ['./alerts-table.component.scss'],
})
export class AlertsTableComponent implements OnInit {

  @Input() alerts: Alert[];

  constructor(private alertsService: AlertsService) { }

  ngOnInit() {
  }

  getDate(date: Date) {
    const momentDate = moment(date);
    if (momentDate.isAfter(moment().subtract(moment().hour(), 'hours'))) {
      return momentDate.format('h:mm A');
    } else if (momentDate.isAfter(moment().subtract(2, 'days'))) {
      return 'yesterday';
    } else if (momentDate.isAfter(moment().subtract(3, 'days'))) {
      return '2 days ago';
    } else {
      return momentDate.format('DD/MM');
    }
  }

  like(alert: Alert) {
    this.alertsService.like(alert);
  }

  save(alert: Alert) {
    this.alertsService.save(alert);

  }
}
