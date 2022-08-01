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

  reports?: Report[];
  currentReport: Report = {};
  currentIndex = -1;
  
  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];



  constructor(private ReportListService: ReportListService) { }

  ngOnInit(): void {
    this.retrieveReports();
  }

  retrieveReports(): void {

    this.ReportListService.getAll().subscribe(data => {
      const {totalItems} = data;
      this.reports = data;
      // this.count = totalItems;
      console.log(data);
    },
      error => {
        console.log(error);
      });
    }
      setActiveReport(alias: Report, index: number): void {
        this.currentReport = alias;
        this.currentIndex = index;
  }
 
  refreshList(): void {
    this.retrieveReports();
    this.currentReport = {};
    this.currentIndex = -1;
  }

  // ---------------------------
  // ---------------------------


  // getRequestParams(): any {
  //   let params: any = {};

  //   return params;
  // }
}


