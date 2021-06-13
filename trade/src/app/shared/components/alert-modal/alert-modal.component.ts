import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Alert } from 'src/app/core/models/alert';

@Component({
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss'],
})
export class AlertModalComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  close() {
    this.modalCtrl.dismiss();
  }
}

export class AlertModalInput {
  alert: Alert;
}
