import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttendenceService {

constructor( private client : HttpClient) { }
addattendenceInformation(body:any){
  return this.client.post(environment.getAttendence,body);
}
}
