import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {path: '', component: AdminComponent, children: [
    {path: 'store-settings', loadChildren: () => import('./storeSettings/storeSettings.module').then(m => m.StoreSettingsModule)},
    {path: 'store-account', loadChildren: () => import('./storeAccount/storeAccount.module').then(m => m.StoreAccountModule)},
    {path: 'store-users', loadChildren: () => import('./storeUsers/storeUsers.module').then(m => m.StoreUsersModule)},
    {path: 'user-profile', loadChildren: () => import('./userProfile/userProfile.module').then(m => m.UserProfileModule)},
    {path: 'menus', loadChildren: () => import('./menus/menus.module').then(m => m.MenusModule)},
    {path: 'schedule', loadChildren: () => import('./schedule/schedule.module').then(m => m.ScheduleModule)}
  ]}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
