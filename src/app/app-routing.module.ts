import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AliasComponent } from './components/alias/alias.component';
import { ConfigComponent } from './components/config/config.component';
import { CreateReportComponent } from './components/create-report/create-report.component';
import { LiveReportComponent } from './components/live-report/live-report.component';
import { LoginComponent } from './components/login/login.component';
import { LogoComponent } from './components/logo/logo.component';
import { ReportListComponent } from './components/report-list/report-list.component';
import { SplashComponent } from './components/splash/splash.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'splash', component: SplashComponent},
  {path: 'report-list', component: ReportListComponent},
  {path: 'addReport', component: CreateReportComponent},
  {path: 'config', component: ConfigComponent},
  {path: 'alias', component: AliasComponent},
  {path: 'liveReport', component: LiveReportComponent},
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