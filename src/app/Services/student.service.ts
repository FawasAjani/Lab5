import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient) { }

  GetStudentData():Observable<any>{
    return this.httpClient.get('http://www.jsonblob.com/1215320810553466880')
  }

}
