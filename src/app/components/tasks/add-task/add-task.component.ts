import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/service/task/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  form: FormGroup;

  constructor(private taskServices: TaskService, private fb:FormBuilder) {
    this.form = this.fb.group({
      title : ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.taskServices.add(this.form.value).subscribe(
      res => {
        console.log(res);
      }, err => {
        console.log(err);
        
      }
    )
  }
}
