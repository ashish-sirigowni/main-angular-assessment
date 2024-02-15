import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../../../Models/conference';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-conference',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './add-conference.component.html',
  styleUrl: './add-conference.component.css'
})
export class AddConferenceComponent {
  conference:Conference;
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  }),
};
constructor(private http: HttpClient, private router: Router)
{
  this.conference = new Conference();
}
addConference()
{
 
  this.http
  .post('http://localhost:5048/api/Conference',this.conference,this.httpOptions)
  .subscribe((response) =>
  {
    console.log(response);
    this.router.navigateByUrl('admindashboard/getallconferencesadmin');
  });
}
}
