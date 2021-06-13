import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XhubPageRoutingModule } from './xhub-routing.module';

import { XhubPage } from './xhub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XhubPageRoutingModule
  ],
  declarations: [XhubPage]
})
export class XhubPageModule {}
