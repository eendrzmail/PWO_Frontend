import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: DashboardComponent, children: [
      { path: '', component: LoginComponent },
      { path: 'employees', component: LoginComponent },
      { path: 'positions', component: LoginComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
