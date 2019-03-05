import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Task } from '../models/task.model';
import { AddTask } from '../models/addtask.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TaskService {
 
  constructor(private http:HttpClient) {}

 
  private tasksUrl = 'http://localhost:8080/tasks';
  private taskURL = 'http://localhost:8080/task';

  public getTasks() {
    return this.http.get<Task[]>(this.tasksUrl);
  }
  
  /*public getAllUsersSortEmpById() {
    return this.http.get<User[]>('http://localhost:8080/usersbyid');
  }

  public getAllUsersSortFname() {
    return this.http.get<User[]>('http://localhost:8080/usersbyfname');
  }

  public getAllUsersSortLname() {
    return this.http.get<User[]>('http://localhost:8080/usersbylname');
  }*/

  public getTask(taskid) {
    return this.http.get<Task>(this.taskURL + "/"+ taskid);
  }
 
  public deleteTask(task) {
    return this.http.delete<JSON>(this.taskURL + "/"+ task.taskid);
  }

  public createTask(task) {
    return this.http.post<Task>(this.taskURL, task);
  }

  public updateTask(task) {
    return this.http.patch<Task>(this.taskURL, task);
  }

}