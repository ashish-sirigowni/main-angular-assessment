import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Conference } from '../../../Models/conference';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-get-all-conferencesadmin',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './get-all-conferencesadmin.component.html',
  styleUrl: './get-all-conferencesadmin.component.css'
})
export class GetAllConferencesadminComponent {
  conference: Conference[] = [];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  constructor(private http: HttpClient, private router: Router) {
    this.getAllConferencesAdmin();
}
getAllConferencesAdmin()
{
  this.http
      .get<Conference[]>('http://localhost:5048/api/Conference',this.httpOptions)
      .subscribe((response) => {
        this.conference = response;
        console.log(this.conference);
      });
}
delete(id: any) {
  
  console.log(id);
  this.http
    .delete('http://localhost:5048/api/Conference/' + id,this.httpOptions)
    .subscribe((response) => {
      console.log(response);
    });
   this.getAllConferencesAdmin(); 
   location.reload(); 
}

edit(id:any)
{
  
  this.router.navigateByUrl('admindashboard/search/'+ id );
}

}
