import { Component, OnInit } from '@angular/core';
import { SortComponentOption } from 'src/app/shared/components/sort/sort.component';

@Component({
  selector: 'app-recent-alerts',
  templateUrl: './recent-alerts.component.html',
  styleUrls: ['./recent-alerts.component.scss'],
})
export class RecentAlertsComponent implements OnInit {

  selectedSortOption: SortComponentOption;

  sortOptions: SortComponentOption[] = [
    {
      key: 'all',
      value: 'All'
    },
    {
      key: 'swing',
      value: 'Swing'
    },
    {
      key: 'day',
      value: 'Day'
    },
  ];

  selectedFilterOption: SortComponentOption;

  filterOptions: SortComponentOption[] = [
    {
      key: 'all',
      value: 'All'
    },
    {
      key: 'top',
      value: 'Top Alerts'
    },
    {
      key: 'following',
      value: 'Following'
    },
  ];

  constructor() { }

  ngOnInit() {
    this.selectedSortOption = this.sortOptions.find(x => x.key === 'all');
    this.selectedFilterOption = this.filterOptions.find(x => x.key === 'all');

  }
  sortChanged() {

  }

  filterChanged() {

  }
}
