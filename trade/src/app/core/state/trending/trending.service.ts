import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Trending } from '../../models/trending';
import { TrendingQuery } from './trending.query';
import { TrendingStore } from './trending.store';
import * as moment from 'moment';



@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  data: Trending[] = [
    {
      id: 1,
      company: {
        id: 1,
        code: 'AAPL',
        name: 'Apple Inc',
        imageUrl: 'apple.png'
      },
      alertsCount: 15,
      bullishPercent: 64,
      bearishPercent: 36,
      date: moment('12/02/1995').toDate()
    }
  ];

  constructor(
    private trendinStore: TrendingStore,
    private trendingQuery: TrendingQuery) {
  }

  getTrending(): any {
    return of(this.data).pipe(tap(data => this.trendinStore.set(data))).subscribe();
  }

}

