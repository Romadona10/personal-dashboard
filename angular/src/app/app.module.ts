import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { AppendCLIPipe } from './pipes/append-cli.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { TodosComponent } from './todos/todos.component';
import { NotesComponent } from './notes/notes.component';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AppendCLIPipe,
    TabsComponent,
    BookmarksComponent,
    TodosComponent,
    NotesComponent,
    AddNotesComponent,
    AddTodoComponent,
    TodoItemComponent,
    EditComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'bookmarks',component:BookmarksComponent},
      {path:'todos',component:TodosComponent},
      {path:'notes',component:NotesComponent},
      {path:'notes/add',component:AddNotesComponent},
      {path:'todos/add',component:AddTodoComponent},
      {path:'todos/:id',component:EditComponent}
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
