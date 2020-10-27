import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import {DataService} from '../../Services/DataS/data.service';

@Component({
  selector: 'app-first-try-c',
  templateUrl: './first-try-c.component.html',
  styleUrls: ['./first-try-c.component.css']
})
export class FirstTryCComponent implements OnInit {

  name:string="jhon";
  age:number=21;

  posts =[];

  users:string[]=['jose','paco','tony','hector']

  constructor(private dataService:DataService){
    this.dataService.getData().subscribe(data => {
      console.log(data);
      this.posts = data;
    });
  }

  SayHello(name:string){
    alert("Hello "+name);
  }

  DeletUser(name:string){
    for(let i=0;i<this.users.length;i++)
    {
      if(this.users[i]==name){
        this.users.splice(i,1);
      }
    }
  }

  AddUser(name){
    this.users.push(name.value)
    name.value="";
    return false;
  }



   ngOnInit(): void {
  }
}
