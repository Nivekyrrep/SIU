import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AliasComponent } from './alias/alias.component';
import { ConfigComponent } from './config/config.component';
import { CreateReportComponent } from './create-report/create-report.component';
import { LoginComponent } from './login/login.component';
import { LogoComponent } from './logo/logo.component';
import { ReportListComponent } from './report-list/report-list.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'report-list', component: ReportListComponent},
  {path: 'addReport', component: CreateReportComponent},
  {path: 'config', component: ConfigComponent},
  {path: 'alias', component: AliasComponent},
  {path: 'logo', component: LogoComponent},
  // {path: 'employees', redirectTo: 'employees', pathMatch: 'full'},
  // {path: 'create-employee', component: CreateEmployeeComponent},
  // {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  // {path: 'employee-details/:id', component: EmployeeDetailsComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }