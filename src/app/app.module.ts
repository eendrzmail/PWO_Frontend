import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component'

import { MaterialModule } from 'src/material/material.module';
import { FormsModule } from '@angular/forms';
import { EmployeesComponent } from './components/employees/employees.component';
import { PositionsComponent } from './components/positions/positions.component';
import { AddPositionComponent } from './components/positions/components/add-position/add-position.component';
import { PositionComponent } from './components/positions/components/position/position.component';
import { AddEmployeeComponent } from './components/employees/components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/components/edit-employee/edit-employee.component';
import { BonusesComponent } from './components/bonuses/bonuses.component';
import { AbsencesComponent } from './components/absences/absences.component';
import { AbsenceTypePipePipe } from './pipes/absence-type-pipe.pipe';
import { AbsenceComponent } from './components/absences/components/absence/absence.component';
import { AddAbsenceComponent } from './components/absences/components/add-absence/add-absence.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    EmployeesComponent,
    PositionsComponent,
    AddPositionComponent,
    PositionComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    BonusesComponent,
    AbsencesComponent,
    AbsenceTypePipePipe,
    AbsenceComponent,
    AddAbsenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
