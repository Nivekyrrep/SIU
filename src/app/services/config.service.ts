import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReportConfig } from 'src/app/models/ReportConfig';

const baseUrl = 'http://localhost:8280/AdminPortal/api/v1/reportConfig';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {
    constructor(private http: HttpClient) { }
    
    getAll(): Observable<any> {
      return this.http.get<any>(baseUrl);
    }


// ---------------------------
// ---------------------------



    get(reportConfig: any): Observable<any> {
      return this.http.get(`${baseUrl}/${reportConfig}`);
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

    findByTitle(title: any): Observable<ReportConfig[]> {
      return this.http.get<ReportConfig[]>(`${baseUrl}?title=${title}`);
    }


  }