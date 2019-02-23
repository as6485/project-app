import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { User } from '../models/user.model';
import { AddUser } from '../models/adduser.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
 
  constructor(private http:HttpClient) {}

 
  private usersUrl = 'http://localhost:8080/users';
  private userURL = 'http://localhost:8080/user';

  public getUsers() {
    return this.http.get<User[]>(this.usersUrl);
  }
  public getAllUsersSortEmpById() {
    return this.http.get<User[]>('http://localhost:8080/usersbyid');
  }

  public getAllUsersSortFname() {
    return this.http.get<User[]>('http://localhost:8080/usersbyfname');
  }

  public getAllUsersSortLname() {
    return this.http.get<User[]>('http://localhost:8080/usersbylname');
  }

  public getUser(userid) {
    return this.http.get<User>(this.userURL + "/"+ userid);
  }
 
  public deleteUser(user) {
    return this.http.delete<JSON>(this.userURL + "/"+ user.userid);
  }

  public createUser(user) {
    return this.http.post<User>(this.userURL, user);
  }

  public updateUser(user) {
    return this.http.patch<User>(this.userURL, user);
  }

}