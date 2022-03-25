import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/todo.service';
import { Observable,of } from 'rxjs';
import { switchMap,filter, map,tap } from 'rxjs/operators';
import { Todo } from '../../todo';
import { MessageBusService } from 'src/app/message-bus.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos$!:Observable<Todo[]>;

  displayedColumns: string[] = ['id','title','completed','completed_chk','actions'];

  // todos:Todo[];
  constructor(private todoService:TodoService,private messageBus:MessageBusService) { }

  loadTodos(){
    this.todos$ = this.todoService.getTodos();
  }

  ngOnInit(): void {
    this.loadTodos();
    this.messageBus.bus$.subscribe(() => this.loadTodos());
    //this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

  onDelete(todo:Todo){
    // this.todoService.delete(todo).subscribe(
    //     ()=>this.todos$ = this.todoService.getTodos()
    //     );

    this.todos$ = this.todoService.delete(todo).pipe(
      switchMap(() => this.todoService.getTodos())
    )

    // this.todos$ = this.todoService.delete(todo).pipe(
    //   // tap((d:any) => console.log(d)),
    //   switchMap(() => this.todos$),
    //   tap((todos:Todo[]) => console.log(todos)),
    //   // map( (todos:Todo[]) => todos.filter(t => t.id !== todo.id)),
    // )
  }

}
