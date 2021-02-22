import { getLocaleDateFormat } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User1 } from '../_models/user1';

@Injectable({
  providedIn: 'root'
})
export class UserService {
url="http://localhost:64626/api/Employee1/";
  constructor(private http: HttpClient) { }

getData(){
  return this.http.get("http://localhost:64626/api/Employee1");
}

postData(data:User1):Observable<User1>{
const httpOptions={headers: new HttpHeaders({'Content-Type':'application/json'})};
let result = this.http.post<any>(this.url,data,httpOptions);
return result;
}
Delete(id){
  return this.http.delete(this.url+id).subscribe(data=>{console.log(data)});
}
}