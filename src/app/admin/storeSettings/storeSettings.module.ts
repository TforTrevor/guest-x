import { NgModule } from '@angular/core';
import { StoreSettingsComponent } from './storeSettings.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { StoreSettingsRoutingModule } from './storeSettings-routing.module';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { OrydxDividerModule } from 'src/app/ordyxDivider/ordyxDivider.module';
import { StoreInfoModule } from './storeInfo/storeInfo.module';

@NgModule({
  declarations: [
    StoreSettingsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    StoreSettingsRoutingModule,
    MaterialFileInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    OrydxDividerModule,
    StoreInfoModule
  ],
  exports: [
    StoreSettingsComponent
  ],
  providers: []
})
export class StoreSettingsModule { }
