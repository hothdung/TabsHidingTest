import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChildTabsPageRoutingModule } from './child-tabs-routing.module';

import { ChildTabsPage } from './child-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChildTabsPageRoutingModule
  ],
  declarations: [ChildTabsPage]
})
export class ChildTabsPageModule {}
