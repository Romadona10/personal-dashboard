import { Component,OnInit } from '@angular/core';
import { User } from '../services/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {


  user!:User[]
    constructor(private userService:UserService){

    }

    onDelete(index: number){
      this.user.splice(index,1)
    }

    ngOnInit(): void {
      this.user = this.userService.getNotes()
    }

}
