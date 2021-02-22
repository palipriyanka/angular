import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iemployee } from '../_contracts/iemployee';

import { Employyee } from '../_models/employyee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

private url:'/assets/data/employees.json';
employee:Employyee[];

  constructor(private http:HttpClient) { }
  getAllDetails():Employyee[]{
    this.employee=[
      {'id':1001,'name':'Priyanka','age':22},
        {'id':1002,'name':'Sreshta','age':22},
        {'id':1003,'name':'Hamshika','age':19}
    ];
    return this.employee;
  }
  getEmployeeFromJson():Observable<Iemployee[]>{
    return this.http.get<Iemployee[]>(this.url);
  }
}
