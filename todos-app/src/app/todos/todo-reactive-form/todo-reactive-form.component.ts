import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActionType } from 'src/app/action-type';
import { MessageBusService } from 'src/app/message-bus.service';
import { Todo } from 'src/app/todo';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todo-reactive-form',
  templateUrl: './todo-reactive-form.component.html',
  styleUrls: ['./todo-reactive-form.component.css']
})
export class TodoReactiveFormComponent implements OnInit {
  todoForm = this.fb.group({
    todoTitle:['',Validators.required],
    todoComplete:[false]
  });
  constructor(private fb: FormBuilder,private todoService:TodoService,private messageBus:MessageBusService) { }

  ngOnInit(): void {
    this.todoForm.valueChanges.subscribe((formData:any) => {
      console.log(formData)
    })
  }

  doSubmit(){
    const todo:Todo = {
      title:this.todoForm.value.todoTitle,
      completed:this.todoForm.value.todoComplete
    }

    console.log(todo) 
    this.todoService.save(todo).subscribe(
      ()=>this.messageBus.dispatch({type:ActionType.NEW_TODO})
      )





    

  }

}
