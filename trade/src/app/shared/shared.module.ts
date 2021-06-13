import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
  ],
  exports: [
    MenuComponent,
    HeaderComponent,
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
