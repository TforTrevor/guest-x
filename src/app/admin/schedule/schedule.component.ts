import { Component } from '@angular/core';
import { fadeInOut, removeFromArray, rootURL } from 'src/app/utils';
import { Schedule } from './schedule';
import { StoreService } from '../store/store.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  animations: [
    fadeInOut
  ]
})
export class ScheduleComponent 
{
  scheduleDays: string[] = [];
  days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  constructor(public store: StoreService, private http: HttpClient) {}

  ngOnInit()
  {
    this.store.getStore().subscribe(res => {
      this.store.getSchedules();
    })
  }

  addSchedule(name: string)
  {
    //this.store.schedules.push({name: name, days: this.scheduleDays});
  }

  removeSchedule(schedule: Schedule)
  {
    removeFromArray(schedule, this.store.schedules);
  }

  output()
  {
    console.log(this.store.schedules);
  }
}