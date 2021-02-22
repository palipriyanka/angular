import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-example',
  templateUrl: './click-example.component.html',
  styleUrls: ['./click-example.component.css']
})
export class ClickExampleComponent implements OnInit {
message:string;
  constructor() {
    
   }

  ngOnInit()  {
  }
  OnClick():void{
    this.message="I am working in Tollplus";
  }

}
