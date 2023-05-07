import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private client:HttpClient) { }

  addContactInformation(body:any){

    return this.client.post("http://localhost:3000/contactForm",body);

  }

}
