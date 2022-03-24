import { Component, OnInit } from '@angular/core';
import { ActionType } from 'src/app/action-type';
import { MessageBusService } from 'src/app/message-bus.service';
import { Todo } from 'src/app/todo';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {


  todo:Todo = {
    title:"",
    completed:false,

  }
  constructor(private todoService:TodoService,private messageBus:MessageBusService) { }

  ngOnInit(): void {
  }

  doSubmit(){
    console.log(this.todo)
    this.todoService.save(this.todo).subscribe(() => {
      const action = {type:ActionType.NEW_TODO}
      this.messageBus.dispatch(action);
    })


  }


}
