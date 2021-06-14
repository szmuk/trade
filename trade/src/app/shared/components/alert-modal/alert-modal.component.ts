import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Alert, AlertDetailed } from 'src/app/core/models/alert';
import { AlertsQuery } from 'src/app/core/state/alerts/alerts.query';
import { AlertsService } from 'src/app/core/state/alerts/alerts.service';

@Component({
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss'],
})
export class AlertModalComponent implements OnInit {

  alert: AlertDetailed;

  subscription = new Subscription();

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private alertsQuery: AlertsQuery,
    private alertsService: AlertsService) { }

  ngOnInit() {
    const alertId = this.navParams.data.alert.id;

    this.subscription.add(
      this.alertsQuery.select(x => x.detailedAlert).pipe(filter(x => !!x)).subscribe((detailedAlert: AlertDetailed) => {
        this.alert = detailedAlert;
      }));

    this.alertsService.getAlertDetails(alertId);
  }

  close() {
    this.modalCtrl.dismiss();
  }


  getDate(date: Date) {
    const momentDate = moment(date);
    if (momentDate.isAfter(moment().subtract(moment().hour(), 'hours'))) {
      return `Today, ${momentDate.format('h:mm A')}`;
    } else if (momentDate.isAfter(moment().subtract(2, 'days'))) {
      return `Yesterday, ${momentDate.format('h:mm A')} `;
    } else {
      return momentDate.format('MM/DD/YYYY, h:mm A');
    }
  }

  like(x) {

  }
  save(x) {

  }
}

export class AlertModalInput {
  alert: Alert;
}
