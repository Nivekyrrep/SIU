import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alias } from 'src/app/models/alias';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8280/AdminPortal/api/v1/aliases';
@Injectable({
  providedIn: 'root'
})
export class AliasService {
    constructor(private http: HttpClient) { }
    getAll(params: any): Observable<any> {
      return this.http.get<any>(baseUrl, {params});
    }
  }