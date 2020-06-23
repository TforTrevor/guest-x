import { Component } from '@angular/core';
import { Store } from '../store/store';
import { HttpClient } from '@angular/common/http';
import { rootURL } from 'src/app/utils';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'add-store',
  templateUrl: './addStore.component.html',
  styleUrls: ['./addStore.component.scss']
})
export class AddStoreComponent 
{
  addForm: FormGroup;

  constructor(private http: HttpClient) {}

  updateForm(form: FormGroup): void
  {
    this.addForm = form;
  }

  addStore(): void
  {
    let observable: Observable<Store> = this.http.post<Store>(rootURL + "store/", this.addForm.value);
    observable.subscribe(res => {
      console.log(res);
    });
  }
}