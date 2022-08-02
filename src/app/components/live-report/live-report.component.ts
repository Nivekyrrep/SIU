import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LiveReport } from 'src/app/models/LiveReport';
import { LiveReportService } from 'src/app/services/live-report.service';

@Component({
  selector: 'app-live-report',
  templateUrl: './live-report.component.html',
  styleUrls: ['./live-report.component.css']
})

export class LiveReportComponent implements OnInit {
  liveReports: LiveReport[] = [];
  currentLiveReport: LiveReport = {};
  currentIndex = -1;
  liveReport = '';
  page = 1;
  count = 0;
  pageSize = 10;
  pageSizes = [3, 6, 9];

  constructor(private LiveReportService: LiveReportService) { }

  ngOnInit(): void {
    this.retrieveLiveReports();
  }

  getRequestParams(searchLiveReport: string, page: number, pageSize: number): any {
    let params: any = {};
    if (searchLiveReport) {
      params[`liveReport`] = searchLiveReport;
    }
    if (page) {
      params[`page`] = page - 1;
    }
    if (pageSize) {
      params[`size`] = pageSize;
    }
    return params;
  }

  retrieveLiveReports(): void {
    const params = this.getRequestParams(this.liveReport, this.page, this.pageSize);
    this.LiveReportService.getAll(params)
      .subscribe(data => {
        const { liveReports, totalItems } = data;
        this.liveReports = liveReports;
        this.count = totalItems;
        console.log(data);
      },
        error => {
          console.log(error);
        });
  }

  setActiveLiveReport(liveReport: LiveReport, index: number): void {
    this.currentLiveReport = liveReport;
    this.currentIndex = index;
  }

  refreshList(): void {
    this.retrieveLiveReports();
    this.currentLiveReport = {};
    this.currentIndex = -1;
  }
  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveLiveReports();
  }

  searchReport(): void {
    this.page = 1;
    this.retrieveLiveReports();
  }

}