import { Component } from '@angular/core';
import { Store } from '../store/store';
import { StoreService } from '../store/store.service';
import { fadeInOut, rootURL } from 'src/app/utils';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'store-settings',
  templateUrl: './storeSettings.component.html',
  styleUrls: ['./storeSettings.component.scss'],
  animations: [
    fadeInOut
  ]
})
export class StoreSettingsComponent 
{
  store: Store;

  constructor(private storeService: StoreService, private http: HttpClient) {}

  ngOnInit()
  {
    this.storeService.getStore().subscribe(res => {
      this.store = res;
    });
  }

  editStore()
  {
    let store: Store;
    this.http.patch(rootURL + "store/" + this.store.id, store);
  }
}