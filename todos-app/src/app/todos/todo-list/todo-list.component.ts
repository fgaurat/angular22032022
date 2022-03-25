import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/todo.service';
import { Observable,of,merge } from 'rxjs';
import { switchMap,filter, map,tap } from 'rxjs/operators';
import { Todo } from '../../todo';
import { MessageBusService } from 'src/app/message-bus.service';
import { ActionType } from 'src/app/action-type';
import { Action } from '../../action';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit,AfterViewInit {

  todos$!:Observable<Todo[]>;

  displayedColumns: string[] = ['id','title','completed','completed_chk','actions'];

  // todos:Todo[];
  constructor(private todoService:TodoService,private messageBus:MessageBusService) { 
    
  }
  ngAfterViewInit(): void {
    this.messageBus.dispatch({type:ActionType.INIT_TODO})
  }
    
  // loadodos(){
  //   this.todos$ = this.todoService.getTodos();
  // }

  ngOnInit(): void {
    const delete$ = this.messageBus.bus$.pipe(
        filter((action:Action) => action.type === ActionType.DELETE_TODO),
        switchMap((action:Action) => this.todoService.delete(action.payload))
        )

    const new$ = this.messageBus.bus$.pipe(filter((action:Action) => action.type === ActionType.NEW_TODO))
    const init$ = this.messageBus.bus$.pipe(filter((action:Action) => action.type === ActionType.INIT_TODO))
    
    this.todos$ = merge(delete$,new$,init$).pipe(
      switchMap( () =>this.todoService.getTodos())
    )
    


    //this.messageBus.bus$.subscribe((action:Action) => this.loadTodos());
    //this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

  

  onDelete(todo:Todo){
    // this.todoService.delete(todo).subscribe(
    //     ()=>this.todos$ = this.todoService.getTodos()
    //     );

    this.messageBus.dispatch({type:ActionType.DELETE_TODO,payload:todo})

    // this.todoService.delete(todo).pipe(
    //   switchMap(() => this.todoService.getTodos())
    // )

    // this.todos$ = this.todoService.delete(todo).pipe(
    //   // tap((d:any) => console.log(d)),
    //   switchMap(() => this.todos$),
    //   tap((todos:Todo[]) => console.log(todos)),
    //   // map( (todos:Todo[]) => todos.filter(t => t.id !== todo.id)),
    // )
  }

}
