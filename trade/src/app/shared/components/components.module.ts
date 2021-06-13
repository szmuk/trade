import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FilterComponent } from './filter/filter.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SortListComponent } from './sort/sort-list/sort-list.component';
import { SortComponent } from './sort/sort.component';

@NgModule({
  declarations: [
    SortComponent,
    MenuComponent,
    HeaderComponent,
    SortListComponent,
    FilterComponent,
  ],
  exports: [
    SortComponent,
    MenuComponent,
    HeaderComponent,
    FilterComponent,
  ],
  entryComponents: [
    SortListComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule,
  ]
})
export class ComponentsModule { }
