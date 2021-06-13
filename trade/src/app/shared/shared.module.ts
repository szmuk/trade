import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from './components/components.module';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
  ],
  exports: [
    ComponentsModule,
    MenuComponent,
    HeaderComponent,
    CommonModule,
    IonicModule,
    RouterModule,
  ],
  imports: [
    ComponentsModule,
    IonicModule,
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }
