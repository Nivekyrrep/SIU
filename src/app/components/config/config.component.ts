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

  reportConfigs: ReportConfig[] = [];
  currentReportConfig: ReportConfig = {};
  currentIndex = -1;
  reportConfig = '';
  page = 1;
  count = 0;
  pageSize = 10;
  pageSizes = [3, 6, 9];

  constructor(private ConfigService: ConfigService) { }

  ngOnInit(): void {
    this.retrieveReportConfigs();
  }

  getRequestParams(searchReportConfig: string, page: number, pageSize: number): any {
    let params: any = {};
    if (searchReportConfig) {
      params[`reportConfig`] = searchReportConfig;
    }
    if (page) {
      params[`page`] = page - 1;
    }
    if (pageSize) {
      params[`size`] = pageSize;
    }
    return params;
  }

  retrieveReportConfigs(): void {
    const params = this.getRequestParams(this.reportConfig, this.page, this.pageSize);
    this.ConfigService.getAll(params)
      .subscribe(data => {
        const { totalItems } = data;
        this.reportConfigs = data;
        this.count = totalItems;
        console.log(data);
      },
        error => {
          console.log(error);
        });
  }
  setActiveReportConfig(reportConfig: ReportConfig, index: number): void {
    this.currentReportConfig = reportConfig;
    this.currentIndex = index;
  }

  refreshList(): void {
    this.retrieveReportConfigs();
    this.currentReportConfig = {};
    this.currentIndex = -1;
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveReportConfigs();
  }

  searchReport(): void {
    this.page = 1;
    this.retrieveReportConfigs();
  }

}


