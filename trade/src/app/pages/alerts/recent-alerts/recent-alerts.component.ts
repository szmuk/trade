import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Alert } from 'src/app/core/models/alert';
import { AlertsQuery } from 'src/app/core/state/alerts/alerts.query';
import { AlertsService } from 'src/app/core/state/alerts/alerts.service';
import { SortComponentOption } from 'src/app/shared/components/sort/sort.component';

@Component({
  selector: 'app-recent-alerts',
  templateUrl: './recent-alerts.component.html',
  styleUrls: ['./recent-alerts.component.scss'],
})
export class RecentAlertsComponent implements OnInit {

  alertsList: Alert[];

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

  constructor(private alertsService: AlertsService, private alertsQuery: AlertsQuery) { }

  ngOnInit() {
    this.selectedSortOption = this.sortOptions.find(x => x.key === 'all');
    this.selectedFilterOption = this.filterOptions.find(x => x.key === 'all');

    this.alertsQuery.selectAll().pipe(filter(x => !!x)).subscribe(alerts => {
      this.alertsList = alerts;
      this.sortChanged();
      this.filterChanged();
    });

  }
  sortChanged() {

  }

  filterChanged() {

  }
}
