import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getJobs(title: string, location: string): Observable<any> {
    let params = new HttpParams();
    if (title) params = params.set('title', title);
    if (location) params = params.set('location', location);
    return this.http.get(`${this.apiUrl}/jobs`, { params });
  }

  createProfile(profile: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/profile`, profile);
  }
}
