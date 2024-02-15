import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Conference } from '../../../Models/conference';

@Component({
  selector: 'app-get-conference-byiduser',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './get-conference-byiduser.component.html',
  styleUrl: './get-conference-byiduser.component.css'
})
export class GetConferenceByiduserComponent {
  conferenceId?: number = 0;
  conference: Conference;
  errMsg: string = '';
  isConferenceExist: boolean = false;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  
  constructor(
    private http: HttpClient,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.conference = new Conference();
    this.activateRoute.params.subscribe((p) => (this.conferenceId = p['bid']));
    console.log(this.conferenceId);
    this.search();
  }

  search() {
    this.http
      .get<Conference>('http://localhost:5048/api/Conference/' + this.conferenceId,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        if (response != null) {
          this.conference = response;
          this.isConferenceExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid Conference Id';
          this.isConferenceExist = false;
        }
      });
  }
 
    getId(id: any) {
      this.router.navigateByUrl('customerdashboard/search/' + id);
    }


}
