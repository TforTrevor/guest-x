import { NgModule } from '@angular/core';
import { MenusComponent } from './menus.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MenusRoutingModule } from './menus-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { OrdyxImageCropperComponent } from './ordyxImageCropper/ordyxImageCropper.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OrydxDividerModule } from 'src/app/ordyxDivider/ordyxDivider.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    MenusComponent, OrdyxImageCropperComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MenusRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MaterialFileInputModule,
    MatIconModule,
    MatDialogModule,
    ImageCropperModule,
    MatProgressSpinnerModule,
    OrydxDividerModule,
    MatTabsModule,
    MatSelectModule
  ],
  exports: [
    MenusComponent
  ],
  providers: []
})
export class MenusModule { }
