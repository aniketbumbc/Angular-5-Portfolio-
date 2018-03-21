import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
fullPathImage:string;

model:sendData=new sendData();
@ViewChild('f') form:any;
  constructor() {
    this.fullPathImage='assets/image 2.PNG';
   }

  ngOnInit() {
  }
  onSubmit(){
    console.log("Form Submitted");
    console.log(this.form.value);
    this.form.reset();
   // console.log(value);
  }
}
class sendData{
  constructor(public  name:string='',
  public  email:string='',
  public  password:string='',
  public  comment:string='',){}
}

