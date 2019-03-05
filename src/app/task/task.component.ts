import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../models/task.model';
import { AddTask } from '../models/addtask.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Task[];
  searchText: String = "";
  
  constructor(private router: Router, private taskService: TaskService) { }

  ngOnInit() {
    console.log("inside ngOnInit");
    this.taskService.getTasks()
      .subscribe(data => {
        this.tasks = data;
        console.log(this.tasks);
      });

  }

}
