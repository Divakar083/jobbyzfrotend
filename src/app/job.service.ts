import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Job {
  jobCategory: string;
  job: string;
  company: string;
  experience: string;
  location: string;
  salary: string;
  joblink: string;
}

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private baseUrl = 'http://localhost:8080/api/jobs';

  constructor(private http: HttpClient) { }

  getJobs(category: string): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.baseUrl}/${category}`);
  }
}
