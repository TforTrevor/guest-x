import { NgModule } from '@angular/core';
import { DropdownMenuComponent } from './dropdownMenu.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    DropdownMenuComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule
  ],
  exports: [
    DropdownMenuComponent
  ],
  providers: []
})
export class DropdownMenuModule { }
