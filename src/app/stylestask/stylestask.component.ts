import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylestask',
  templateUrl: './stylestask.component.html',
  styleUrls: ['./stylestask.component.css']
})
export class StylestaskComponent implements OnInit {
dynamiccolor="yellow";
serverid=10;
serverstatus:string;
showOnline=true;
isServerOnline:boolean;
  constructor() { }

  ngOnInit() {
  }

  getServerStatus() {
    this.serverstatus=Math.random()>0.5?'online':'offline';
    this.isServerOnline=this.serverstatus=='online';
 
  }

   getColor():string{
     let color=this.serverstatus=='online' ?'#90EE90' : '#FF6961';
     return color;
   }

}
