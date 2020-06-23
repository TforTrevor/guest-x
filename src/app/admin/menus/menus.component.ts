import { Component } from '@angular/core';
import { removeFromArray, fadeInOut } from 'src/app/utils';
import { FileInput } from 'ngx-material-file-input';
import { MatDialog } from '@angular/material/dialog';
import { ImageCropperComponent } from 'ngx-image-cropper';
import { OrdyxImageCropperComponent } from './ordyxImageCropper/ordyxImageCropper.component';
import { Menu } from './menu';
import { Schedule } from '../schedule/schedule';
import { StoreService } from '../store/store.service';

@Component({
  selector: 'menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss'],
  animations: [
    fadeInOut
  ]
})
export class MenusComponent 
{
  // menus: Menu[] = [
  //   {name: "Breakfast", schedules: [{name: "Test", days: []}]},
  //   {name: "Lunch", schedules: [{name: "Test", days: []}]},
  //   {name: "Dinner", link: "https://marketplace.canva.com/EADan7kw85k/1/0/1236w/canva-white-black-pizza-italian-stripes-restaurant-menu-F766RyvslOk.jpg", 
  //                    schedules: [{name: "Test", days: []}]},
  // ];

  constructor(private dialog: MatDialog, public store: StoreService) { }

  ngOnInit()
  {
    this.store.getMenus();
  }

  removeMenu(menu: Menu) 
  {
    //removeFromArray(menu, this.menus);
  }

  cropImage(name: string, fileInput: FileInput, schedules: Schedule[])
  {
    this.dialog.open(OrdyxImageCropperComponent, {data: {file: fileInput.files[0], name: name, schedules: schedules, callback: this.addMenu.bind(this)}});
  }
  
  addMenu(name: string, link: string, schedules: Schedule[]) 
  {
    //this.menus.push({name: name, link: link, schedules: schedules});
  }
}