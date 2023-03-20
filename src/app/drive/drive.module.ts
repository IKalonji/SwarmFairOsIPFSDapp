import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrivePageRoutingModule } from './drive-routing.module';

import { DrivePage } from './drive.page';
import { FileItemComponent } from '../components/file-item/file-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrivePageRoutingModule,
  ],
  declarations: [DrivePage, FileItemComponent]
})
export class DrivePageModule {}
