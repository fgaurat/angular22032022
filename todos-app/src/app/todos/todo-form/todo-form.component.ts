import { Component, OnInit } from '@angular/core';
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
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  doSubmit(){
    console.log("doSubmit")
    console.log(this.todo)
    this.todoService.save(this.todo).subscribe()


  }


}
