import { NgModule } from '@angular/core';
import { StoreInfoComponent } from './storeInfo.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '../../store/store.module';

@NgModule({
  declarations: [
    StoreInfoComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    StoreModule
  ],
  exports: [
    StoreInfoComponent
  ],
  providers: []
})
export class StoreInfoModule { }
