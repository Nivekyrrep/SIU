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
  liveReports?: LiveReport[];
  currentLiveReport: LiveReport = {};
  currentIndex = -1;
  // page = 1;
  // count = 0;
  // pageSize = 3;
  // pageSizes = [3, 6, 9];
  constructor(private LiveReportService: LiveReportService) { }
  ngOnInit(): void {
    this.retrieveLiveReports();
  }
  retrieveLiveReports(): void {
    this.LiveReportService.getAll().subscribe(data => {
      const {totalItems} = data;
      this.liveReports = data;
      // this.count = totalItems;
      console.log(data);
    },
      error => {
        console.log(error);
      });
    }
      setActiveLiveReport(alias: LiveReport, index: number): void {
        this.currentLiveReport = alias;
        this.currentIndex = index;
  }
  refreshList(): void {
    this.retrieveLiveReports();
    this.currentLiveReport = {};
    this.currentIndex = -1;
  }
  // ---------------------------
  // ---------------------------
  // getRequestParams(): any {
  //   let params: any = {};
  //   return params;
  // }
}