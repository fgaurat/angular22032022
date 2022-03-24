import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoReactiveFormComponent } from './todo-reactive-form/todo-reactive-form.component';



@NgModule({
  declarations: [
    TodoListComponent,
    TodoFormComponent,
    TodoReactiveFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    TodoListComponent,
    TodoFormComponent,
    TodoReactiveFormComponent

  ],

})
export class TodosModule { }
