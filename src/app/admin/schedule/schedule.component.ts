import { Component } from '@angular/core';
import { fadeInOut, removeFromArray } from 'src/app/utils';

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
  scheduleItems: ScheduleItem[] = [
    {name: "Lunch", days: ["Sunday", "Saturday"]}
  ];

  scheduleDays: string[] = [];
  days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  addSchedule(name: string)
  {
    this.scheduleItems.push({name: name, days: this.scheduleDays});
  }

  removeSchedule(schedule: ScheduleItem)
  {
    removeFromArray(schedule, this.scheduleItems);
  }

  output()
  {
    console.log(this.scheduleItems);
  }
}

interface ScheduleItem
{
  name: string;
  days: string[];
}