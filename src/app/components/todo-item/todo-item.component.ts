import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  // Set dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      "is-complete": this.todo.completed
    }
    return classes;
  }

  onToggle(todo) {
    // Toggle in UI
    todo.completed = !todo.completed;

    // Toggle on server
    this.todoService.toggleCompleted(todo).subscribe(returnData =>
      console.log(todo));
  }

  onDelete(todo) {
    console.log("delete");
    this.deleteTodo.emit(todo);
  }

}
