import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router, RouterModule} from '@angular/router'
import { User } from '../services/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent {
  title!:string
  content!:string
  user: any;

  constructor(private userService:UserService,private router:Router){

  }

   onSubmit(b:NgForm){
    console.log(b.value);
    const user = new User(b.value.title,b.value.content)
    console.log(user);
    this.userService.addNote(user)
    this.router.navigateByUrl("/notes")
   

    
   }
  


   getValue(b:FormControl){
    console.log(b);
    
   }
}
