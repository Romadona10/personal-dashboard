import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  user:User[]=[
    new User("Test title","Test Content!"),
    new User("ifeanyichukwu","keep pushing you are almost there")
  ]

  constructor() { }

  getNotes(){
    return this.user
  }

  getNote(id:string){
     this.user.find(u =>{
      return u.id ===id
     })
  }

  addNote(user:User){
    this.user.push(user)
  }

  updateNote(id:string,updatedFields:Partial<User>){
     const user =this.getNote(id)
     Object.assign(User,updatedFields)
  }

  deleteNote(id:string){
   const userIndex=this.user.findIndex(n =>n.id===id)
   if(userIndex == -1)return
   this.user.splice(userIndex,1)
  }
}
