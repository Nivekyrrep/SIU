import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alias } from 'src/app/models/alias';

const baseUrl = 'http://localhost:8280/AdminPortal/api/v1/aliases';

@Injectable({
  providedIn: 'root'
})

export class AliasService {
    constructor(private http: HttpClient) { }
    
    getAll(): Observable<any> {
      return this.http.get<any>(baseUrl);
    }


// ---------------------------
// ---------------------------



    get(alias: any): Observable<any> {
      return this.http.get(`${baseUrl}/${alias}`);
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

    findByTitle(title: any): Observable<Alias[]> {
      return this.http.get<Alias[]>(`${baseUrl}?title=${title}`);
    }


  }