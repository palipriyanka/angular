import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {
dangerclass='text-danger';
successclass='text-success';
public isspecial=true;
messageClass={
  'text-success':true,
  'text-special':this.isspecial

};
hasError=true;

  constructor() { }

  ngOnInit() {
  }

}
