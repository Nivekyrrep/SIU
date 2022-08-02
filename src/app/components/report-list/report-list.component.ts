import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/models/Report';
import { ReportListService } from 'src/app/services/report-list.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})

export class ReportListComponent implements OnInit {

  reports: Report[]= [];
  currentReport: Report = {};
  currentIndex = -1;
  report = '';
  page = 1;
  count = 0;
  pageSize = 10;
  pageSizes = [3, 6, 9];

  constructor(private ReportListService: ReportListService) { }

  ngOnInit(): void {
    this.retrieveReports();
  }

  getRequestParams(searchReport: string, page: number, pageSize: number): any {
    let params: any = {};
    if (searchReport) {
      params[`report`] = searchReport;
    }
    if (page) {
      params[`page`] = page - 1;
    }
    if (pageSize) {
      params[`size`] = pageSize;
    }
    return params;
  }


  retrieveReports(): void {
    const params = this.getRequestParams(this.report, this.page, this.pageSize);
    this.ReportListService.getAll(params)
      .subscribe(data => {
        const { reports, totalItems } = data;
        this.reports = reports;
        this.count = totalItems;
        // this.count = totalItems;
        console.log(data);
      },
        error => {
          console.log(error);
        });
  }

  setActiveReport(report: Report, index: number): void {
    this.currentReport = report;
    this.currentIndex = index;
  }

  refreshList(): void {
    this.retrieveReports();
    this.currentReport = {};
    this.currentIndex = -1;
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveReports();
  }

  searchReport(): void {

    this.page = 1;

    this.retrieveReports();

  }



}