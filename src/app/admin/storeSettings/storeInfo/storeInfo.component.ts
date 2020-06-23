import { Component } from '@angular/core';
import { fadeInOut, rootURL, deleteEmtpyValues } from 'src/app/utils';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Store } from '../../store/store';
import { StoreService } from '../../store/store.service';

@Component({
  selector: 'store-info',
  templateUrl: './storeInfo.component.html',
  styleUrls: ['./storeInfo.component.scss'],
  animations: [
    fadeInOut
  ]
})
export class StoreInfoComponent 
{
  store: Store;
  patchForm: FormGroup;
  editStore: boolean = false;

  constructor(private storeService: StoreService, private http: HttpClient) {}

  ngOnInit()
  {
    this.getStore();
  }

  getStore()
  {
    this.storeService.getStore().subscribe(res => {
      this.store = res;
    });
  }

  updateForm(form: FormGroup)
  {
    this.patchForm = form;
  }

  patchStore()
  {
    let object: Object = this.patchForm.value;
    deleteEmtpyValues(object);
    this.http.patch(rootURL + "store/" + this.store.id, object).subscribe(res => {
      console.log(res);
      this.editStore = false;
      this.getStore();
    })
  }  
}