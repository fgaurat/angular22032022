import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildInc03Component } from '../child-inc03/child-inc03.component';

@Component({
  selector: 'app-parent-inc03',
  templateUrl: './parent-inc03.component.html',
  styleUrls: ['./parent-inc03.component.css']
})
export class ParentInc03Component implements OnInit {


  @ViewChild("otherChild03")
  child03!:ChildInc03Component;

  constructor() { }

  ngOnInit(): void {
  }

  doIncrement(){
    this.child03.increment()
  }

}
