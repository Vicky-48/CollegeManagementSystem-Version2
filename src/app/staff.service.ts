import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

constructor(private client:HttpClient) { }

addstaffInformation(body:any){

  return this.client.post(environment.getStaff,body);

}

}
