import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';
import { AddtaskComponent } from './addtask/addtask.component';

const routes: Routes = [
  { path: 'adduser', component: UserComponent, runGuardsAndResolvers: 'always' },
  { path: 'task',    component: TaskComponent, runGuardsAndResolvers: 'always' },
  { path: 'addtask',    component: AddtaskComponent, runGuardsAndResolvers: 'always' }
  //{ path: 'adduser', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true, onSameUrlNavigation: 'reload' })],
  //imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
