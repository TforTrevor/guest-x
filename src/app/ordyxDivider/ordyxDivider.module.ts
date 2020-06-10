import { NgModule } from '@angular/core';
import { OrdyxDividerComponent } from './ordyxDivider.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    OrdyxDividerComponent
  ],
  imports: [
    MatDividerModule
  ],
  exports: [
    OrdyxDividerComponent
  ],
  providers: []
})
export class OrydxDividerModule { }
