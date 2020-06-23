import { Schedule } from '../schedule/schedule';

export interface Menu 
{
  disabled: string;
  id: number;
  menuImages: MenuImage[];
  menuSchedules: MenuSchedule[];
  name: string;
  storeId: number;
}

export interface MenuImage
{
  id: number;
  image: Image;
  placement: number;
}

export interface MenuSchedule
{
  id: number;
  schedule: Schedule;
}

export interface Image
{
  disabled: string;
  height: string;
  id: number;
  imageName: string;
  imgurl: string;
  posX: string;
  posY: string;
  storeId: number;
  width: string;
}