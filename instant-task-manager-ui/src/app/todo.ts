import { TodoDataService } from './todo-data.service';
export class Todo {
  id: number;
  title: String = '';
  description: String = '';
  date: Date = new Date();
  complete: Boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
