import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttendenceService {

constructor( private client : HttpClient) { }
addattendenceInformation(body:any){
  return this.client.post("http://localhost:3000/attendence",body);
}
}
