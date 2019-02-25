import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  // <any> was used because the newly created todo has no ID
  // therefore, the todo object what we have will not accept the newly created todo object
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  
  title: string;
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    const todo = {
      title: this.title,
      completed: false
    }

    this.addTodo.emit(todo);
  }
  

}
