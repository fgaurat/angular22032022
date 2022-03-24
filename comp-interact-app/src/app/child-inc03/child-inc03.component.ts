import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-inc03',
  template: '<p>cpt : {{cpt}}</p>',
  styleUrls: ['./child-inc03.component.css']
})
export class ChildInc03Component implements OnInit {


  cpt=0

  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    this.cpt++
  }

}
