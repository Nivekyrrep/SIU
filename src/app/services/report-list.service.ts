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
    
  getAll(): Observable<any> {
    return this.http.get<any>(baseUrl);
  }


// ---------------------------
// ---------------------------



  get(report: any): Observable<any> {
    return this.http.get(`${baseUrl}/${report}`);
  }
  
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  
  // delete(id: any): Observable<any> {
  //   return this.http.delete(`${baseUrl}/${id}`);
  // }

  findByTitle(title: any): Observable<Report[]> {
    return this.http.get<Report[]>(`${baseUrl}?title=${title}`);
  }


}