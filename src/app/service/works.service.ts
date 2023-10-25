import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Work} from "../Work";

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  private baseUrl= "http://localhost:9090/works"
  constructor(private http: HttpClient) { }

  saveContent(content: Work): Observable<Work> {
    return this.http.post<Work>(`${this.baseUrl}`,content);
  }
  deleteContent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  getAllWorks(): Observable<Work[]>{
    return this.http.get<Work[]>(`${this.baseUrl}`);
  }
}
