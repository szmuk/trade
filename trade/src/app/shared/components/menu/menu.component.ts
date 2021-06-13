import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  public appPages = [
    { title: 'Alerts', url: '/alerts', icon: 'pulse-outline' },
    { title: 'Leaderboard', url: '/leaderboard', icon: 'ribbon-outline' },
    { title: 'Xhub', url: '/xhub', icon: 'school-outline' },
  ];
}
