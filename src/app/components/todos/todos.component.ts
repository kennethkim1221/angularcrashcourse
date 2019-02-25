import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(returnData => {
      this.todos = returnData;
    });
  }

  deleteTodo(todo: Todo) {
    console.log('delete me');

    // Remove from UI
    this.todos = this.todos.filter(todoItem => todoItem.id !== todo.id);

    // Remove from server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo) {

    // Add to server
    this.todoService.addTodo(todo).subscribe(todo => {

      // Add to UI
      console.log("Item added to the server successfully...");
      this.todos.push(todo);
    });
  }

}
