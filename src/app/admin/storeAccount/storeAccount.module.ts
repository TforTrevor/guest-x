import { NgModule } from '@angular/core';
import { StoreAccountComponent } from './storeAccount.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { StoreAccountRoutingModule } from './storeAccount-routing.module';

@NgModule({
  declarations: [
    StoreAccountComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    StoreAccountRoutingModule
  ],
  exports: [
    StoreAccountComponent
  ],
  providers: []
})
export class StoreAccountModule { }
