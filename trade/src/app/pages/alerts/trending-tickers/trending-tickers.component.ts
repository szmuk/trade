import { Component, OnInit } from '@angular/core';
import { SortComponentOption } from 'src/app/shared/components/sort/sort.component';

@Component({
  selector: 'app-trending-tickers',
  templateUrl: './trending-tickers.component.html',
  styleUrls: ['./trending-tickers.component.scss'],
})
export class TrendingTickersComponent implements OnInit {
  gender;

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

  constructor() { }

  ngOnInit() {
    this.selectedSortOption = this.sortOptions[0];
  }

}
