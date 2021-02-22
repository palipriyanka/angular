import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-example1',
  templateUrl: './forms-example1.component.html',
  styleUrls: ['./forms-example1.component.css']
})
export class FormsExample1Component implements OnInit {
topics=["Angular","React","Ruby"];
  constructor() { }

  ngOnInit() {
  }

}
