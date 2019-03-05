import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Task } from '../models/task.model';
import { AddTask } from '../models/addtask.model';
import { TaskService } from '../task/task.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  disableControl = false;
  formdata;
  submitted = false;
  addtask: AddTask = new AddTask();
  tasks: Task[];
 

  constructor(private formBuilder: FormBuilder, private router: Router, private taskService: TaskService) { }

  ngOnInit() {
    console.log("inside addtask ngOnInit");
    this.formdata = this.formBuilder.group({
      project: ['', Validators.required],
      task: ['', [Validators.required]],
      chkbox: [''],
      parenttask: [''],
      startdate: [''],
      enddate: [''],
      user: [''],
      priority: ['']
    });

    //https://plnkr.co/edit/oQMZsR3mjGqyvLdU0gvL?p=preview
    //https://stackoverflow.com/questions/43779438/angular-2-form-validations-start-date-end-date
    this.formdata.controls['startdate'].setValue(new Date().toISOString().substring(0, 10));
    this.formdata.controls['enddate'].setValue(new Date().toISOString().substring(0, 10));
  }

  // convenience getter for easy access to form fields
  get f() { return this.formdata.controls; }

  createTask(): void {
    console.log("create func and submitted is "+this.submitted);
    this.submitted = true;
    console.log("create func and submitted is "+this.submitted);
    // stop here if form is invalid
    if (this.formdata.invalid) {
      return;
    }
    this.taskService.createTask(this.addtask)
      .subscribe(data => {
        //this.users=this.users.concat(data);
        this.taskService.getTasks()
          .subscribe(data => {
            this.tasks = data;
          });
      });
    this.formreset();

  };


  isParentChkbox() {

    console.log("inside isParentChkbox");
    if (!this.disableControl) {
      this.formdata.controls['startdate'].disable();
      this.formdata.controls['parenttask'].disable();
      this.formdata.controls['enddate'].disable();
      this.formdata.controls['priority'].disable();
    }
    else {
      this.formdata.controls['startdate'].enable();
      this.formdata.controls['parenttask'].enable();
      this.formdata.controls['enddate'].enable();
      this.formdata.controls['priority'].enable();
    }
    this.disableControl = !this.disableControl;
  }



  formreset() {
    
    this.addtask = new AddTask();
    this.disableControl = true;
    this.isParentChkbox();
    this.formdata.reset();
    this.formdata.controls['startdate'].setValue(new Date().toISOString().substring(0, 10));
    this.formdata.controls['enddate'].setValue(new Date().toISOString().substring(0, 10));
    this.submitted = false;
  }

}
