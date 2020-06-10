import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreAccountComponent } from './storeAccount.component';


const routes: Routes = [
  {path: '', component: StoreAccountComponent}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreAccountRoutingModule { }
