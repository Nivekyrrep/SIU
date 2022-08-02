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

  getAll(params: any): Observable<any> {
    return this.http.get<any>(baseUrl, { params });
  }

  // ---------------------------
  // ---------------------------

  get(RDOCID: any): Observable<LiveReport> {
    return this.http.get(`${baseUrl}/${RDOCID}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<LiveReport> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  // delete(id: any): Observable<any> {
  //   return this.http.delete(`${baseUrl}/${id}`);
  // }

  findByTitle(liveReport: any): Observable<LiveReport[]> {
    return this.http.get<LiveReport[]>(`${baseUrl}?liveReport=${liveReport}`);
  }
}