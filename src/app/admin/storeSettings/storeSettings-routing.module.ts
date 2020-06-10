import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreSettingsComponent } from './storeSettings.component';


const routes: Routes = [
  {path: '', component: StoreSettingsComponent}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreSettingsRoutingModule { }
