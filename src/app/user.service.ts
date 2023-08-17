import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private client:HttpClient,private http:HttpClient) { }
getstudentdetails:any="";
addUserInformation(body:any){

  return this.client.post(environment.getUser,body);

}
getattendence(){
  return this.http.get(environment.getAttendence);

}
getstaffattendence(){
  return this.http.get(environment.getStaffAttendence);
}

getcontactform(){
  return this.http.get(environment.getContactForm);
}
getStudentinfo(){
  return this.http.get(environment.getUser);
}
getStaffinfo(){
  return this.http.get(environment.getStaff);
}
}
