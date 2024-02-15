import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Conference } from '../../../Models/conference';
import { Router } from '@angular/router';


@Component({
  selector: 'app-get-all-conferences',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './get-all-conferences.component.html',
  styleUrl: './get-all-conferences.component.css'
})
export class GetAllConferencesComponent {
  conference: Conference[] = [];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  constructor(private http: HttpClient, private router: Router) {
    this.getAllConferences();
}
getAllConferences()
{
  this.http
      .get<Conference[]>('http://localhost:5048/api/Conference',this.httpOptions)
      .subscribe((response) => {
        this.conference = response;
        console.log(this.conference);
      });
}


}
