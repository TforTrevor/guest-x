import { Injectable } from '@angular/core';
import { Store } from './store';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Schedule } from '../schedule/schedule';
import { rootURL } from 'src/app/utils';
import { Menu } from '../menus/menu';

@Injectable({
  providedIn: 'root'
})
export class StoreService 
{
  store: Store;
  images: String[] = [
    "https://marketplace.canva.com/EADan7kw85k/1/0/1236w/canva-white-black-pizza-italian-stripes-restaurant-menu-F766RyvslOk.jpg",
    "https://marketplace.canva.com/EADan7kw85k/1/0/1236w/canva-white-black-pizza-italian-stripes-restaurant-menu-F766RyvslOk.jpg"
  ];
  schedules: Schedule[] = [];
  menus: Menu[] = [];

  constructor(private http: HttpClient) 
  {
    this.getStore();
  }

  getStore(): Observable<Store>
  {
    let observable: Observable<Store> = this.http.get<Store>(rootURL + "store/1");
    observable.subscribe(res => {
      this.store = res;
    });
    return observable; 
  }

  getSchedules(): Observable<Schedule[]>
  {
    let observable: Observable<Schedule[]> = this.http.get<Schedule[]>(rootURL + "store/1/schedules");
    observable.subscribe(res => {
      this.schedules = res;
    });
    return observable;
  }

  addSchedule(schedule: Schedule)
  {
    let observable: Observable<Schedule> = this.http.post<Schedule>(rootURL + "schedule", schedule);
    observable.subscribe(res => {
      console.log(res);
      this.getSchedules();
    })
  }

  getMenus(): Observable<Menu[]>
  {
    let observable: Observable<Menu[]> = this.http.get<Menu[]>(rootURL + "store/1/menuCards");
    observable.subscribe(res => {
      this.menus = res;
      console.log(this.menus);
    });
    return observable;
  }
}
