import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../../Services/photoS/photo.service'
import { from } from 'rxjs';
import { Photos } from 'src/app/interfaces/photos';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit {

  albumsId=["valor1","valor2","valor3","valor4",];
  photos:Photos[] =[];

  constructor(public photoService: PhotoService){
    this.photoService.getPhoto().subscribe(
      photos => {
        console.log(photos)
        this.photos=photos;
      },
      err => console.log(err)
    );
  }

  ngOnInit(): void {
  }

}