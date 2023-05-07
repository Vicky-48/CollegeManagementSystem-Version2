import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private client:HttpClient,private http:HttpClient) { }

addUserInformation(body:any){

  return this.client.post("http://localhost:3000/users",body);

}
getattendence(){
  return this.http.get("http://localhost:3000/attendence");

}
}
