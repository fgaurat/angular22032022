import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Todo } from './todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  constructor(private http:HttpClient) { }

  readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(environment.url_todos)
  }

  delete(todo:Todo):Observable<any>{
      const url = `${environment.url_todos}/${todo.id}`
      return this.http.delete<any>(url);
  }

  save(todo:Todo):Observable<Todo>{
    return this.http.post<Todo>(environment.url_todos, todo, this.httpOptions);

  }
}
