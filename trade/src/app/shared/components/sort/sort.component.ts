import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { SortListComponent } from './sort-list/sort-list.component';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent {

  @Input() options: SortComponentOption[];
  @Input() placeholder: string;

  @Input() value: SortComponentOption;
  @Output() valueChange = new EventEmitter<SortComponentOption>();

  constructor(public popoverController: PopoverController) { }

  async openOptions(ev) {
    const popover = await this.popoverController.create({
      component: SortListComponent,
      event: ev,
      translucent: true,
      componentProps: { options: this.options, selected: this.value }
    });

    popover.onDidDismiss().then(response => {
      this.value = response.data;
      this.valueChange.emit(this.value);
    });

    await popover.present();
  }

}

export class SortComponentOption {
  key: string;
  value: string;
}
