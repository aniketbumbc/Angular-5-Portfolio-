import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
fullPathImage:string;
model:sendData=new sendData();
  constructor() {
    this.fullPathImage='assets/image 2.PNG';
   }

  ngOnInit() {
  }
}
class sendData{
  constructor(public  name:string='',
  public  email:string='',
  public  password:string='',
  public  comment:string='',){}
}

