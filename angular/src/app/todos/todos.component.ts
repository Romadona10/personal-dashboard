import { Component,OnInit } from '@angular/core';
import {RouterModule,Router} from '@angular/router'
import { TodoService } from '../services/todo.service';
import { Todo } from '../services/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todo!:Todo[]
  


     constructor(private todoService:TodoService,private router:Router){ }

    
  ngOnInit(): void {
    this.todo =this.todoService.getTodo()
  }
  onEdit(todo:Todo){
   this.router.navigate(['/todos',todo.id])
  }
  onRemove(todo:Todo){
    this.todoService.deleteTodo(todo.id)
  }
    

 
}

