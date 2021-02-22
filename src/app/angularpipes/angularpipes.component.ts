import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angularpipes',
  templateUrl: './angularpipes.component.html',
  styleUrls: ['./angularpipes.component.css']
})
export class AngularpipesComponent implements OnInit {
name="tOllplus India PVT lTD";
message:string="Welcome to Tollplus";
date:Date=new Date(2021,6,7);
person={
firstname:'Pali',
lastname:'Priyanka',
age:22
};
  constructor() { }

  ngOnInit() {
  }

}
