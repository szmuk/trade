import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Alert } from '../../models/alert';
import { AlertsQuery } from './alerts.query';
import { AlertsStore } from './alerts.store';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  data: Alert[] = [
    {
      id: 1,
      company: {
        id: 1,
        code: 'AAPL',
        name: 'Apple Inc',
        imageUrl: 'apple.png'
      },
      user: {
        id: 1,
        name: 'CKadera',
        login: 'ckadera',
        imageUrl: 'u1.jpg',
        alertsCount: 88,
        following: true
      },
      closed: moment().subtract(1, 'days').toDate(),
      opened: moment().subtract(3, 'days').toDate(),
      type: 'day',
      gainLoss: 4,
      likesCount: 24,
      savedCount: 7,
      commentsCount: 37,
      top: true,
      liked: true,
      saved: false,
      commented: true
    }
  ];

  constructor(
    private alertsStore: AlertsStore,
    private alertsQuery: AlertsQuery) {
  }

  getAlerts(): any {
    return of(this.data).pipe(tap(data => this.alertsStore.set(data))).subscribe();
  }

}

