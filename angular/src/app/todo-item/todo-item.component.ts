import { Component,Input,OnInit,Output,EventEmitter } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import {Router,RouterModule} from '@angular/router'
import { TodoService } from '../services/todo.service';
import { Todo } from '../services/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!:Todo
  @Output() edit: EventEmitter<void>=new EventEmitter
  @Output() remove: EventEmitter<void>=new EventEmitter

  constructor(){}


  onRemove(){
    this.remove.emit()
    
  }
  onEdit(){
   this.edit.emit() 
  }
  ngOnInit(): void {
    
  }
}
