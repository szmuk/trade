import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Alert } from '../../models/alert';
import { AlertsQuery } from './alerts.query';
import { AlertsStore } from './alerts.store';
import * as moment from 'moment';
import { cloneDeep } from 'lodash';

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
        imageUrl: 'p1.jpg',
        alertsCount: 88,
        following: true
      },
      closed: moment().subtract(3, 'hours').toDate(),
      opened: moment().subtract(3, 'days').toDate(),
      type: 'Swing',
      gainLoss: 4,
      likesCount: 24,
      savedCount: 7,
      commentsCount: 37,
      top: true,
      liked: true,
      saved: false,
      commented: true,
      price: 210.22,
      currency: '$'
    },
    {
      id: 2,
      company: {
        id: 3,
        code: 'SPY',
        name: 'S&P 500 Index',
        imageUrl: 'spy.png'
      },
      user: {
        id: 2,
        name: 'Adam',
        login: 'szmuk',
        imageUrl: 'p2.jpg',
        alertsCount: 38,
        following: false
      },
      closed: null,
      opened: moment().subtract(1, 'days').toDate(),
      type: 'Day',
      gainLoss: 6,
      likesCount: 14,
      savedCount: 2,
      commentsCount: 7,
      top: false,
      liked: false,
      saved: false,
      commented: false,
      price: 110.22,
      currency: '$'
    },
    {
      id: 4,
      company: {
        id: 2,
        code: 'TSLA',
        name: 'Tesla Inc',
        imageUrl: 'tesla.png'
      },
      user: {
        id: 1,
        name: 'CKadera',
        login: 'ckadera',
        imageUrl: 'p1.jpg',
        alertsCount: 88,
        following: true
      },
      closed: null,
      opened: moment().subtract(6, 'days').toDate(),
      type: 'Day',
      gainLoss: 11,
      likesCount: 14,
      savedCount: 2,
      commentsCount: 7,
      top: false,
      liked: true,
      saved: false,
      commented: false,
      price: 130.22,
      currency: '$'
    },
    {
      id: 3,
      company: {
        id: 2,
        code: 'TSLA',
        name: 'Tesla Inc',
        imageUrl: 'tesla.png'
      },
      user: {
        id: 2,
        name: 'Adam',
        login: 'szmuk',
        imageUrl: 'p2.jpg',
        alertsCount: 38,
        following: false
      },
      closed: moment().subtract(1, 'days').toDate(),
      opened: moment().subtract(2, 'days').toDate(),
      type: 'Day',
      gainLoss: -12,
      likesCount: 14,
      savedCount: 2,
      commentsCount: 7,
      top: false,
      liked: false,
      saved: true,
      commented: false,
      price: 110.36,
      currency: '$'
    },
    {
      id: 5,
      company: {
        id: 4,
        code: 'AMZN',
        name: 'Amazon.com',
        imageUrl: 'amazon.png'
      },
      user: {
        id: 1,
        name: 'CKadera',
        login: 'ckadera',
        imageUrl: 'p1.jpg',
        alertsCount: 88,
        following: true
      },
      closed: null,
      opened: moment().subtract(7, 'days').toDate(),
      type: 'Day',
      gainLoss: -19,
      likesCount: 1,
      savedCount: 2,
      commentsCount: 2,
      top: false,
      liked: false,
      saved: true,
      commented: false,
      price: 310.36,
      currency: '$'
    }
  ];

  constructor(
    private alertsStore: AlertsStore,
    private alertsQuery: AlertsQuery) {
  }

  getAlerts(): any {
    return of(this.data).pipe(tap(data => this.alertsStore.set(data))).subscribe();
  }

  save(alert: Alert) {
    const entity = cloneDeep(this.alertsQuery.getEntity(alert.id));
    entity.saved = !entity.saved;
    this.alertsStore.update(entity.id, entity);
  }

  like(alert: Alert) {
    const entity = cloneDeep(this.alertsQuery.getEntity(alert.id));
    entity.liked = !entity.liked;
    this.alertsStore.update(entity.id, entity);
  }
}

