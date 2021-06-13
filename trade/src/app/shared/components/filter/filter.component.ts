import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {

  @Input() options: FilterComponentOption[];

  @Input() value: FilterComponentOption;
  @Output() valueChange = new EventEmitter<FilterComponentOption>();

  filterSelected(option) {
    this.value = option;
    this.valueChange.emit(this.value);
  }
}

export class FilterComponentOption {
  key: string;
  value: string;
}
