import { Component } from '@angular/core';
import { Conference } from '../../../Models/conference';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-conference-byname',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './get-conference-byname.component.html',
  styleUrl: './get-conference-byname.component.css'
})
export class GetConferenceBynameComponent {
  title: string = '';
  conferences: Conference[] = [];

  constructor(private http: HttpClient) {}

  getConferenceByName() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      })
    };

    this.http.get<Conference[]>(`http://localhost:5048/api/Conference/GetConferenceByName/${this.title}`, httpOptions)
      .subscribe((response) => {
        this.conferences = response;
        console.log(this.conferences);
      });
  }

}
