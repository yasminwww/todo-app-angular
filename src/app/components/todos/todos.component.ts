import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from './../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  // Anything inside "TodoService" (methods, properties) is now accessible in this module
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    //Subscribe method works just like .then()
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }
}
