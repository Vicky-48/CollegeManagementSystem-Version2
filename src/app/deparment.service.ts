import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeparmentService {

  constructor(private http: HttpClient) { }
  getdepartment(){
    return this.http.get(environment.getDepartment);

}


}
