import { Component, OnInit } from '@angular/core';
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
    this.selectedSortOption = this.sortOptions[0];

    this.trendingQuery.selectAll().pipe(filter(x => !!x)).subscribe(x => {
      this.trendingList = x;
    });

    this.trendingService.getTrending();
  }

}
