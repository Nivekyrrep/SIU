import { Component, OnInit } from '@angular/core';
import { LiveReport } from 'src/app/models/LiveReport';

@Component({
  selector: 'app-live-report',
  templateUrl: './live-report.component.html',
  styleUrls: ['./live-report.component.css']
})
export class LiveReportComponent implements OnInit {

//   liveReports: LiveReport[] = [];
//   currentLiveReport: LiveReport = {};
//   currentIndex = -1;
//   title = '';
//   page = 1;
//   count = 0;
//   pageSize = 3;
//   pageSizes = [3, 6, 9];
//   constructor(private LiveReportService: LiveReportService) { }
  ngOnInit(): void {
//     this.retrieveLiveReports();
  }
//   getRequestParams(searchTitle: string, page: number, pageSize: number): any {
//     let params: any = {};
//     if (searchTitle) {
//       params[`title`] = searchTitle;
//     }
//     if (page) {
//       params[`page`] = page - 1;
//     }
//     if (pageSize) {
//       params[`size`] = pageSize;
//     }
//     return params;
//   }
//   retrieveTutorials(): void {
//     const params = this.getRequestParams(this.title, this.page, this.pageSize);
//     this.tutorialService.getAll(params)
//     .subscribe(
//       response => {
//         const { tutorials, totalItems } = response;
//         this.tutorials = tutorials;
//         this.count = totalItems;
//         console.log(response);
//       },
//       error => {
//         console.log(error);
//       });
//   }
//   handlePageChange(event: number): void {
//     this.page = event;
//     this.retrieveTutorials();
//   }
//   handlePageSizeChange(event: any): void {
//     this.pageSize = event.target.value;
//     this.page = 1;
//     this.retrieveTutorials();
//   }
//     refreshList(): void {
//       this.retrieveTutorials();
//       this.currentTutorial = {};
//       this.currentIndex = -1;
//     }
//     setActiveTutorial(tutorial: Tutorial, index: number): void {
//       this.currentTutorial = tutorial;
//       this.currentIndex = index;
//     }
  }