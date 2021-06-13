import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { filter } from 'rxjs/operators';
import { Trending } from 'src/app/core/models/trending';
import { TrendingQuery } from 'src/app/core/state/trending/trending.query';
import { TrendingService } from 'src/app/core/state/trending/trending.service';
import { SortComponentOption } from 'src/app/shared/components/sort/sort.component';

@Component({
  selector: 'app-trending-tickers',
  templateUrl: './trending-tickers.component.html',
  styleUrls: ['./trending-tickers.component.scss'],
})
export class TrendingTickersComponent implements OnInit {

  trendingList: Trending[];
  filteredTrendingList: Trending[];

  selectedSortOption: SortComponentOption;

  sortOptions: SortComponentOption[] = [
    {
      key: 'today',
      value: 'Today'
    },
    {
      key: 'week',
      value: 'This week'
    },
    {
      key: 'month',
      value: 'This month'
    },
  ];

  constructor(private trendingQuery: TrendingQuery, private trendingService: TrendingService) { }

  ngOnInit() {
    this.selectedSortOption = this.sortOptions.find(x => x.key === 'month');

    this.trendingQuery.selectAll().pipe(filter(x => !!x)).subscribe(trending => {
      this.trendingList = trending;
      this.sortChanged();
    });

    this.trendingService.getTrending();
  }

  sortChanged() {
    let daysToSubstract: number;

    switch (this.selectedSortOption.key) {
      case 'today':
        daysToSubstract = 1;
        break;
      case 'week':
        daysToSubstract = 7;
        break;
      case 'month':
        daysToSubstract = 30;
        break;
    }

    this.filteredTrendingList = this.trendingList.filter(x => moment(x.date).isAfter(moment().subtract(daysToSubstract, 'days')));
  }

}
