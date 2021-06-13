import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { FilterComponent } from './filter/filter.component';
import { HeaderOptionsComponent } from './header/header-options/header-options.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SortFilterListComponent } from './sort-filter/sort-filter-list/sort-filter-list.component';
import { SortFilterComponent } from './sort-filter/sort-filter.component';

@NgModule({
  declarations: [
    SortFilterComponent,
    MenuComponent,
    HeaderComponent,
    SortFilterListComponent,
    FilterComponent,
    HeaderOptionsComponent,
    AlertModalComponent,
  ],
  exports: [
    SortFilterComponent,
    MenuComponent,
    HeaderComponent,
    FilterComponent,
    AlertModalComponent,
  ],
  entryComponents: [
    SortFilterListComponent,
    HeaderOptionsComponent,
    AlertModalComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule,
  ]
})
export class ComponentsModule { }
