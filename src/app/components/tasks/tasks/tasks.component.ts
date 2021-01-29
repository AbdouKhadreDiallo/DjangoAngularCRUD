import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: any;

  constructor(private taskservice: TaskService) { }

  ngOnInit(): void {
    this.taskservice.getAll().subscribe(
      response => {
        console.log(response);
        this.tasks = response;
        
      }, 
      error => {
        console.log(error);
        
      }
    )
  }

}
