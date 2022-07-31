import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LiveReport } from 'src/app/models/LiveReport';

const baseUrl = 'http://localhost:8280/AdminPortal/api/v1/liveReports';

@Injectable({
  providedIn: 'root'
})

export class LiveReportService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(baseUrl);
  }

  // ---------------------------
  // ---------------------------

  get(liveReport: any): Observable<any> {
    return this.http.get(`${baseUrl}/${liveReport}`);
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

  findByTitle(title: any): Observable<LiveReport[]> {
    return this.http.get<LiveReport[]>(`${baseUrl}?title=${title}`);
  }
}