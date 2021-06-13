import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent,
    CommonModule,
    IonicModule,
    CommonModule,
    RouterModule,
  ],
  imports: [
    CommonModule,
    IonicModule,
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }
