export interface Schedule
{
  storeId?: number;
  id?: number;
  title?: string;
  weekday?: number;
  startTime?: Time;
  endTime?: Time;
}

interface Time
{
  hour: number;
  minute: number;
  second: number;
  nano: number;  
}