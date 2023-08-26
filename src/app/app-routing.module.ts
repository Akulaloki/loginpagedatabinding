import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskListComponent } from './tasklist/tasklist.component';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
  {path:'', redirectTo:'/login',pathMatch: 'full'},
  {path: 'login',component: LoginComponent},
  {path: 'dashboard',component: DashboardComponent},
  { path: 'todo', component: TodoComponent},
  { path: 'task', component: TaskListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
