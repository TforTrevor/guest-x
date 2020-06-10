import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreUsersComponent } from './storeUsers.component';


const routes: Routes = [
  {path: '', component: StoreUsersComponent}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreUsersRoutingModule { }
