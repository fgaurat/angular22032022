import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-inc01',
  templateUrl: './child-inc01.component.html',
  styleUrls: ['./child-inc01.component.css']
})
export class ChildInc01Component implements OnInit,OnChanges {

  @Input()
  cpt?:number;
  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  


  ngOnInit(): void {
  }

}
