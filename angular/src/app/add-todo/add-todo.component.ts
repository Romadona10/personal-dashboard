import { Component,Input, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import {Router,RouterModule} from '@angular/router'
import { TodoService } from '../services/todo.service';
import { Todo } from '../services/todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent  {

  
  constructor(private todoService:TodoService,private router:Router){}
  
 
onSubmit(b:NgForm){
  console.log(b.value);
  const todo = new Todo(b.value.text)
  console.log(todo);
  this.todoService.addTodo(todo)
  this.router.navigateByUrl("/todos")
}
  
}
