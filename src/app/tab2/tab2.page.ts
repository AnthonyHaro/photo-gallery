import { Component } from '@angular/core';

// para utilizar el servicio en tab2

import { PhotoService } from "../services/photo.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor(public photoService: PhotoService) { }

  addPhotoToGallery() {
    this.photoService.addNewToGallery()
  }
  takeLowQualityPhoto() {
  this.photoService.addNewToGallery(50);
  }
}


