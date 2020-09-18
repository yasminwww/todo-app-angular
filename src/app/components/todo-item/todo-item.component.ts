import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  // Input is for receiving data from a DOM imput element
  @Input() todo: Todo;
  /*
    Output is for emmitting data up to the parent 
    method "deleteTodo(todo) from the html method onDelete(todo)"
  */
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  // Set dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed,
    };
    return classes;
  }

  // onToggle
  onToggle(todo) {
    // toggle in UI
    todo.completed = !todo.completed;
    //Toggle on server
    this.todoService
      .toggleCompleted(todo)
      .subscribe((todo) => console.log(todo));
  }
  //onDelete
  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }
}
