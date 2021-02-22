import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-event-demo',
  templateUrl: './input-event-demo.component.html',
  styleUrls: ['./input-event-demo.component.css']
})
export class InputEventDemoComponent implements OnInit {
servername="Priyanka";
buttonstatus=true;
  constructor() { }

  ngOnInit() {
  }
  button_click(){

  }
  OnUpdateServer(event: Event){
    this.servername=(event.target as HTMLInputElement).value;
    if(this.servername==''){
      this.buttonstatus=false;
    }
    else{
      this.buttonstatus=true;
    }
  }
}
