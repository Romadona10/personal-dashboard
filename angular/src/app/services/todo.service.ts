import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todo:Todo[]=[
    new Todo("My Lagos journey"),
    new Todo("hey!")   
  ]

  constructor() { }


  getTodo(){
    return this.todo
  }

  getTodos(id:string){
    this.todo.find(t =>{
     return t.id ===id
    })
 }

 addTodo(todo:Todo){
   this.todo.push(todo)
 }

 updateNote(id:string,updatedFields:Partial<Todo>){
    const todo =this.getTodos(id)
    Object.assign(this.todo,updatedFields)
 }

 deleteTodo(id:string){
  const Index=this.todo.findIndex(t =>t.id===id)
  if(Index == -1)return
  this.todo.splice(Index,1)
 }
}
