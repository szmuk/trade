import { Component } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { SortComponentOption } from '../sort.component';

@Component({
  selector: 'app-sort-list',
  templateUrl: './sort-list.component.html',
  styleUrls: ['./sort-list.component.scss'],
})
export class SortListComponent {

  options: SortComponentOption[];
  selected: SortComponentOption;

  constructor(public navParams: NavParams, public popoverController: PopoverController) {
    this.options = this.navParams.data.options;
    this.selected = this.navParams.data.selected;
  }

  select(option) {
    this.popoverController.dismiss(option);
  }
}
