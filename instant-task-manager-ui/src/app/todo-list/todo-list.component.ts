import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo';

@Component(
  {
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
  }
)
export class TodoListComponent {
  year: any;
  month: any;
  day: any;
  sortedTasks: Array<any> = [];

  @Input()
  todos: Todo[];

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }

  onToggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
  }

  toTimestamp(year: any, month: any, day: any) {
    const currentDate = new Date(Date.UTC(year, month - 1, day));
    return currentDate.getTime() / 1000;
   }

  sortTodos(todos: Todo[]) {
    this.sortedTasks = todos.sort((a: any, b: any) =>
      a.date - b.date
      );
    }
}
