import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private client:HttpClient) { }

  addContactInformation(body:any){

    return this.client.post(environment.getContactForm,body);

  }

}
