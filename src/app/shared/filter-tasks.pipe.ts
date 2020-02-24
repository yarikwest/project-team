import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './interfaces';

@Pipe({
  name: 'filterTasks'
})
export class FilterTasksPipe implements PipeTransform {

  transform(tasks: Task[], status: string = ''): Task[] {
    if (!status.trim()) {
      return tasks;
    }
    return tasks.filter(task => {
      return task.status.name.includes(status);
    });
  }

}
