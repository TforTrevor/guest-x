import { NgModule } from '@angular/core';
import { GuestComponent } from './guest.component';
import { MatCardModule } from '@angular/material/card';
import { GuestRoutingModule } from './guest-routing.module';

@NgModule({
  declarations: [
    GuestComponent
  ],
  imports: [
    MatCardModule,
    GuestRoutingModule
  ],
  exports: [
    GuestComponent
  ],
  providers: []
})
export class GuestModule { }
