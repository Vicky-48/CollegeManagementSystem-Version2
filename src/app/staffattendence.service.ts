import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaffattendenceService {

constructor(private client : HttpClient) { }

addstaffattendenceInformation(body:any){
  return this.client.post("http://localhost:3000/staffattendence",body);
}
}
