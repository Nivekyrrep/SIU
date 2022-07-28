import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatBadgeModule } from '@angular/material/badge'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AliasComponent } from './alias/alias.component';
import { ConfigComponent } from './config/config.component';
import { CreateReportComponent } from './create-report/create-report.component';
import { HttpInterceptorService } from './services/http-interceptor.service';
// import { LiveReportComponent } from './live-report/live-report.component';
import { LoginComponent } from './login/login.component';
import { LogoComponent } from './logo/logo.component';
import { ReportListComponent } from './report-list/report-list.component';

import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    AliasComponent,
    ConfigComponent,
    CreateReportComponent,
    LoginComponent,
    LogoComponent,
    ReportListComponent,
    // LiveReportComponent   
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    NgxPaginationModule
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
