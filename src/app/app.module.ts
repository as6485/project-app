import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasic } from './addtask/modal-basic';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {UserService} from './user/user.service';
import { TaskComponent } from './task/task.component';
import {TaskService} from './task/task.service';
import {HttpClientModule} from "@angular/common/http";
import { FilterPipe} from './filter.pipe';
import { AddtaskComponent } from './addtask/addtask.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    UserComponent,
    TaskComponent,
    AddtaskComponent,
    NgbdModalBasic
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
