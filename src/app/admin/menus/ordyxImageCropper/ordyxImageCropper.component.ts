import { Component, Inject } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'ordyx-image-cropper',
  templateUrl: './ordyxImageCropper.component.html',
  styleUrls: ['./ordyxImageCropper.component.scss']
})
export class OrdyxImageCropperComponent {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  imageFile: any;
  loaded: boolean = false;

  constructor(private dialogRef: MatDialogRef<OrdyxImageCropperComponent>, @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit()
  {
    this.imageFile = this.data.file;
  }
  
  fileChangeEvent(event: any): void 
  {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) 
  {
    this.croppedImage = event.base64;
  }

  imageLoaded() 
  {
    this.loaded = true;
  }

  cropperReady() 
  {

  }

  loadImageFailed() 
  {
      // show message
  }

  cropImage()
  {
    this.data.callback(this.data.name, this.croppedImage);
    this.dialogRef.close();
  }
}