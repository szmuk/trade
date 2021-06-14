import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppQuery } from './core/state/app/app.query';
import { AppService } from './core/state/app/app.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  subscription = new Subscription();

  collapsed = false;

  constructor(private appQuery: AppQuery, private appService: AppService) {
  }

  ngOnInit() {
    this.subscription.add(
      this.appQuery.select(x => x.sideMenuCollapsed).subscribe(collapsed => {
        this.collapsed = collapsed;
      })
    );
  }

  splitPaneChanged() {
    this.appService.resetSideMenu();
  }
}
