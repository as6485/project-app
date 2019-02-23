import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { AddUser } from '../models/adduser.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  adduserForm: FormGroup;
  users: User[];
  adduser: AddUser = new AddUser();
  public toggle = false;
  searchText: String = "";
  submitted = false;

  constructor(private router: Router, private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log("inside ngOnInit");
    this.userService.getUsers()
      .subscribe(data => {
        this.users = data;
      });

    this.adduserForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      empid: ['', [Validators.required]]
    });
  }

  sortById(){
    console.log("inside sortById");
    this.userService.getAllUsersSortEmpById()
      .subscribe(data => {
        this.users = data;
      });
  }
  sortByFname(){
    console.log("inside sortByFname");
    this.userService.getAllUsersSortFname()
      .subscribe(data => {
        this.users = data;
      });
  }
  sortByLname(){
    console.log("inside sortByLname");
    this.userService.getAllUsersSortLname()
      .subscribe(data => {
        this.users = data;
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.adduserForm.controls; }

  deleteUser(user: User): void {
    this.userService.deleteUser(user)
      .subscribe(
        (data) => {
          //this.users = this.users.filter((t) => t.userid !== user.userid);
          //console.log("After delete data "+data.stringify);
          this.userService.getUsers()
            .subscribe(data => {
              this.users = data;
            });
        });
    this.resetUser();
    //this.router.navigate(['adduser']);
  };

  editUser(user: User): void {

    this.adduser.empid = user.empid;
    this.adduser.firstname = user.firstname;
    this.adduser.lastname = user.lastname;
    this.adduser.projectid = user.projectid;
    this.adduser.taskid = user.taskid;
    this.adduser.userid = user.userid;

    this.toggle = true;

  };

  updateUser(user: User): void {
    this.userService.updateUser(user)
      .subscribe(
        (data) => {
          this.userService.getUsers()
            .subscribe(data => {
              this.users = data;
            });
        });

    this.resetUser();
    //this.toggle = !this.toggle;

  }

  resetUser(): void {
    console.log("rset func and submitted is "+this.submitted);
    this.submitted = false;
    this.adduser = new AddUser();
    this.searchText = "";
    if(this.toggle == true){
      this.toggle = false;
    } 
    
  };

  createUser(): void {
    console.log("create func and submitted is "+this.submitted);
    this.submitted = true;
    console.log("create func and submitted is "+this.submitted);
    // stop here if form is invalid
    if (this.adduserForm.invalid) {
      return;
    }
    this.userService.createUser(this.adduser)
      .subscribe(data => {
        //this.users=this.users.concat(data);
        this.userService.getUsers()
          .subscribe(data => {
            this.users = data;
          });
      });
    this.resetUser();

  };

}
