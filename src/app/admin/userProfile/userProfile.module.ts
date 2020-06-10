import { NgModule } from '@angular/core';
import { UserProfileComponent } from './userProfile.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { UserProfileRoutingModule } from './userProfile-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { OrydxDividerModule } from 'src/app/ordyxDivider/ordyxDivider.module';

@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    UserProfileRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    OrydxDividerModule
  ],
  exports: [
    UserProfileComponent
  ],
  providers: []
})
export class UserProfileModule { }
