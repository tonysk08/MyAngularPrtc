import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from '../../interfaces/post';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  
  constructor(private httpClient:HttpClient){
    console.log("Services its working");
  }

  getData(){
    return this.httpClient.get<Post[]>("https://jsonplaceholder.typicode.com/posts");

  }
}
