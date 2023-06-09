import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { PostComponent } from './post/post.component';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent    {
  bg:string="https://plus.unsplash.com/premium_photo-1666262369867-6e521a979afb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80"

  date = new Date()
  title(title: any) {
    throw new Error('Method not implemented.');
  }
 
 
 
 
  
  constructor(){ 
  }
  
   async changeBGimage(){
  const result= await fetch('https://source.unsplash.com/random',{
      method: 'HEAD'
    })
    this.bg=result.url
   }

  ngAfterViewInit(){
    this.date = new Date()
  }

 
  }

  

 

 

 
 
 
 
  


function fullName() {
  throw new Error('Function not implemented.');
}

