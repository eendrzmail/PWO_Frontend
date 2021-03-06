import { AddAbsenceComponent } from './components/absences/components/add-absence/add-absence.component';
import { AbsenceComponent } from './components/absences/components/absence/absence.component';
import { AbsencesComponent } from './components/absences/absences.component';
import { EditEmployeeComponent } from './components/employees/components/edit-employee/edit-employee.component';
import { PositionComponent } from './components/positions/components/position/position.component';
import { PositionsComponent } from './components/positions/positions.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddBonusComponent } from './components/bonuses/components/add-bonus/add-bonus.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: DashboardComponent, canActivate: [AuthGuard], children: [
      { path: '', component: EmployeesComponent },
      { path: 'employees', component: EmployeesComponent },
      { path: 'employees/:id', component: EditEmployeeComponent },
      { path: 'positions', component: PositionsComponent },
      { path: 'positions/:id', component: PositionComponent },
      { path: 'absences', component: AbsencesComponent },
      { path: 'absences/:id', component: AbsenceComponent },
      { path: 'absences/add/:id', component: AddAbsenceComponent },
      { path: 'bonuses/add/:id', component: AddBonusComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
