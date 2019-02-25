import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = "?_limit=5";

  constructor(private http:HttpClient) { }

  // This method returns an observable
  getTodos(): Observable<Todo[]> {
    // Both methods below are the same
    //return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
    return this.http.get<Todo[]>(this.todosUrl + this.todosLimit);

  }

  // Toggle Completed
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    console.log(`URL: ${url}`);
    console.log("OBJECT: " + JSON.stringify(todo));
    return this.http.put(url, todo, httpOptions);
  }

  // Delete Todo
  deleteTodo(todo: Todo): Observable<Todo>{
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  // Add Todo
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }

}