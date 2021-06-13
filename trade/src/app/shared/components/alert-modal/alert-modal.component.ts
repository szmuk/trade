import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import * as moment from 'moment';
import { Alert } from 'src/app/core/models/alert';

@Component({
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss'],
})
export class AlertModalComponent implements OnInit {

  alert: Alert;

  constructor(private modalCtrl: ModalController, private navParams: NavParams) { }

  ngOnInit() {
    this.alert = this.navParams.data.alert;
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
