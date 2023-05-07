import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

constructor(private client:HttpClient) { }

addstaffInformation(body:any){

  return this.client.post("http://localhost:3000/staff",body);

}

}
