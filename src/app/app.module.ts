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
import { AliasComponent } from './components/alias/alias.component';
import { ConfigComponent } from './components/config/config.component';
import { CreateReportComponent } from './components/create-report/create-report.component';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { LiveReportComponent } from './components/live-report/live-report.component';
import { LoginComponent } from './components/login/login.component';
import { LogoComponent } from './components/logo/logo.component';
import { ReportListComponent } from './components/report-list/report-list.component';
import { SplashComponent } from './components/splash/splash.component';

import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    AliasComponent,
    ConfigComponent,
    CreateReportComponent,
    LiveReportComponent, 
    LoginComponent,
    LogoComponent,
    ReportListComponent,
    SplashComponent,
      
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
