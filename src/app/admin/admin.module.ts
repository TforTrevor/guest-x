import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DropdownMenuModule } from '../dropdownMenu/dropdownMenu.module';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSidenavModule,
    DropdownMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    AdminRoutingModule
  ],
  exports: [
    AdminComponent
  ],
  providers: []
})
export class AdminModule { }
