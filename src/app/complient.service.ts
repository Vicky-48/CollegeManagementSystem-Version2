import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComplientService {

constructor(private client:HttpClient,private http:HttpClient) { }
addComplientInformation(body:any){

  return this.client.post("http://localhost:3000/Complients",body);

}
getComplients(){
  return this.http.get("http://localhost:3000/Complients");

}
}
