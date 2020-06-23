import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStoreComponent } from './addStore.component';
import { AddStoreRoutingModule } from './addStore-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '../store/store.module';

@NgModule({
  declarations: [AddStoreComponent],
  imports: [
    CommonModule,
    AddStoreRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    StoreModule
  ]
})
export class AddStoreModule { }
