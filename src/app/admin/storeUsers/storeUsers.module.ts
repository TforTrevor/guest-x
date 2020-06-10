import { NgModule } from '@angular/core';
import { StoreUsersComponent } from './storeUsers.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { StoreUsersRoutingModule } from './storeUsers-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    StoreUsersComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    StoreUsersRoutingModule,
    MatTableModule
  ],
  exports: [
    StoreUsersComponent
  ],
  providers: []
})
export class StoreUsersModule { }
