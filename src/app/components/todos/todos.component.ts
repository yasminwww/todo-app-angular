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

  // Talking to the Service
  deleteTodo(todo: Todo) {
    // Remove from UI
    this.todos = this.todos.filter((t) => t.id !== todo.id);
    // Remove from server
    this.todoService.deleteTodo(todo).subscribe();
  }
  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe((todo) => {
      this.todos.push(todo);
    });
  }
}
