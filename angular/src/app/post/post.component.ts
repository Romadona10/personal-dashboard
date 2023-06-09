import { Component,OnInit,Input,Output, EventEmitter} from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [UserService]
})
export class PostComponent implements OnInit  {
 

 
  

 constructor(private user:UserService){
  
 }

 ngOnInit(): void {
   
 }

  
}
 
