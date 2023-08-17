import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StaffattendenceService {

constructor(private client : HttpClient) { }

addstaffattendenceInformation(body:any){
  return this.client.post(environment.getStaffAttendence,body);
}
}
