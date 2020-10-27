import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Photos } from '../../interfaces/photos';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private httpclient:HttpClient){ 
  }

  getPhoto(){
    return this.httpclient.get<Photos[]>("https://jsonplaceholder.typicode.com/photos?_limit=5");
  }
}
