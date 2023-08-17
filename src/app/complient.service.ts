import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComplientService {

constructor(private client:HttpClient,private http:HttpClient) { }
addComplientInformation(body:any){

  return this.client.post(environment.getComplients,body);

}
getComplients(){
  return this.http.get(environment.getComplients);

}
// addQueryreplay(body1:any){
//   return this.client.post("http://localhost:3000/Queryreply",body1);
// }
}
