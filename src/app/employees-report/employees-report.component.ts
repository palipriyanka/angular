import { Component, OnInit } from '@angular/core';
import { Employyee } from '../_models/employyee';

@Component({
  selector: 'app-employees-report',
  templateUrl: './employees-report.component.html',
  styleUrls: ['./employees-report.component.css']
})
export class EmployeesReportComponent implements OnInit {
employees:Employyee[];
  constructor() { }

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees(){
    this.employees=[
      {'id':1001,'name':'Priyanka','age':22},
      {'id':1002,'name':'Sreshta','age':22},
      {'id':1003,'name':'Hamshika','age':19}
    ]
  }
}
