import { Component, OnInit } from '@angular/core';
import { Employyee } from '../_models/employyee';

@Component({
  selector: 'app-employees-report1',
  templateUrl: './employees-report1.component.html',
  styleUrls: ['./employees-report1.component.css']
})
export class EmployeesReport1Component implements OnInit {
employee:Employyee[];
getAllDetails
  constructor() { }

  ngOnInit() {
  }

}
