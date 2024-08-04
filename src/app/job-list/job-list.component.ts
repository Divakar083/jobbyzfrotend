import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  categories: string[] = ['python', 'java', 'uiux', 'genai', 'devops'];
  jobs: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Optional: Initialize with a default category
    this.fetchJobs(this.categories[0]);
  }

  fetchJobs(category: string): void {
    this.http.get<any[]>(`http://localhost:8080/api/jobs/${category}`)
      .subscribe(
        (data) => {
          this.jobs = data;
        },
        (error) => {
          console.error('Error fetching jobs:', error);
        }
      );
  }
}
