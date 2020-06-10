import { Component } from '@angular/core';
import { removeFromArray, fadeInOut } from 'src/app/utils';
import { FileInput } from 'ngx-material-file-input';
import { MatDialog } from '@angular/material/dialog';
import { ImageCropperComponent } from 'ngx-image-cropper';
import { OrdyxImageCropperComponent } from './ordyxImageCropper/ordyxImageCropper.component';

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
  menus: Menu[] = [
    {name: "Breakfast"},
    {name: "Lunch"},
    {name: "Dinner", link: "https://marketplace.canva.com/EADan7kw85k/1/0/1236w/canva-white-black-pizza-italian-stripes-restaurant-menu-F766RyvslOk.jpg"},
  ];

  constructor(private dialog: MatDialog) { }

  removeMenu(menu: Menu) 
  {
    removeFromArray(menu, this.menus);
  }

  cropImage(name: string, fileInput: FileInput)
  {
    this.dialog.open(OrdyxImageCropperComponent, {data: {file: fileInput.files[0], name: name, callback: this.addMenu.bind(this)}});
  }
  
  addMenu(name: string, link: string) 
  {
    this.menus.push({name: name, link: link});
  }
}

export interface Menu 
{
  name: string;
  link?: string;
}