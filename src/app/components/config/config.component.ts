import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReportConfig } from 'src/app/models/ReportConfig';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  reportConfigs?: ReportConfig[];
  currentReportConfig: ReportConfig = {};
  currentIndex = -1;
  
  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];



  constructor(private ConfigService: ConfigService) { }

  ngOnInit(): void {
    this.retrieveReportConfigs();
  }

  retrieveReportConfigs(): void {

    this.ConfigService.getAll().subscribe(data => {
      const {totalItems} = data;
      this.reportConfigs = data;
      // this.count = totalItems;
      console.log(data);
    },
      error => {
        console.log(error);
      });
    }
      setActiveReportConfig(alias: ReportConfig, index: number): void {
        this.currentReportConfig = alias;
        this.currentIndex = index;
  }
 
  refreshList(): void {
    this.retrieveReportConfigs();
    this.currentReportConfig = {};
    this.currentIndex = -1;
  }

  // ---------------------------
  // ---------------------------


  // getRequestParams(): any {
  //   let params: any = {};

  //   return params;
  // }
}


