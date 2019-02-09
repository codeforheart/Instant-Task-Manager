import {Component, Input, Output, EventEmitter, OnChanges, OnInit} from '@angular/core';
import { Todo } from 'app/todo';

@Component({
  selector: 'ngbd-datepicker-popup',
  templateUrl: './datepicker.component.html'
})
export class NgbdDatepickerComponent {
  model: any;
  @Input() todo: Todo;

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor() {
    this.setDefaultDate(this.todo);
  }

  setDefaultDate(todoTask) {
    if (this.model && todoTask) {
      todoTask.date = new Date(Date.UTC(this.model.year, this.model.month - 1, this.model.day, 0, 0, 0));
    }
  }

  updateTodoDate(todo: Todo) {
    this.setDefaultDate(todo);
  }
}
