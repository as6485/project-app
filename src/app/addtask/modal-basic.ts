import {Component, Input } from '@angular/core';
import { Task } from '../models/task.model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './modal-basic.html'
})
export class NgbdModalBasic {
  
  lookup: String;
  choosenText: String;

  tasks: Task[] = [
    { taskid: 1, parentid: 1, projectid:1,  description: 'task 1', startDate: '2019/02/28', endDate: '2019/02/28', priority: 1, status: false},
    { taskid: 2, parentid: 1, projectid:1,  description: 'task 2', startDate: '2019/02/28', endDate: '2019/02/28', priority: 1, status: false}
  ];



  constructor(private modalService: NgbModal) {
    console.log("Lookup ... "+ this.lookup);
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.choosenText = this.tasks[0].description;
    }, (reason) => {
      this.choosenText = this.tasks[1].description;
    });
  }

  
}