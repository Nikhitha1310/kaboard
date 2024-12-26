import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Task {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'kanban-board',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasksToDo: Task[] = [
    { id: 1, title: 'Task 1', description: 'Description for task 1' },
    { id: 2, title: 'Task 2', description: 'Description for task 2' }
  ];

  tasksInProgress: Task[] = [
    { id: 3, title: 'Task 3', description: 'Description for task 3' }
  ];

  tasksDone: Task[] = [
    { id: 4, title: 'Task 4', description: 'Description for task 4' }
  ];
  title: any;

  addTask(list: 'ToDo' | 'InProgress' | 'Done') {
    const newTask: Task = {
      id: Math.random(), // Random ID for simplicity
      title: `New Task ${Math.random()}`,
      description: 'New task description'
    };

    if (list === 'ToDo') {
      this.tasksToDo.push(newTask);
    } else if (list === 'InProgress') {
      this.tasksInProgress.push(newTask);
    } else {
      this.tasksDone.push(newTask);
    }
  }
}
