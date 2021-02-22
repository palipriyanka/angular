import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forexample',
  templateUrl: './forexample.component.html',
  styleUrls: ['./forexample.component.css']
})
export class ForexampleComponent implements OnInit {
favoritecolors=['Red','Blue','White','Black'];
  constructor() { }

  ngOnInit() {
  }

}
