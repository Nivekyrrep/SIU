import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Report } from 'src/app/models/Report';

const baseUrl = 'http://localhost:8280/AdminPortal/api/v1/reports';

@Injectable({
  providedIn: 'root'
})
export class ReportListService {
  
  constructor(private http: HttpClient) { }
    
  getAll(params: any): Observable<any> {
    return this.http.get<any>(baseUrl, { params });
  }


// ---------------------------
// ---------------------------



  get(reportId: any): Observable<Report> {
    return this.http.get(`${baseUrl}/${reportId}`);
  }
  
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  
  update(id: any, data: any): Observable<Report> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  
  // delete(id: any): Observable<any> {
  //   return this.http.delete(`${baseUrl}/${id}`);
  // }

  findByTitle(report: any): Observable<Report[]> {
    return this.http.get<Report[]>(`${baseUrl}?report=${report}`);
  }


}