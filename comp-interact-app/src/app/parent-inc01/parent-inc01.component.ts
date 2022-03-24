import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-inc01',
  templateUrl: './parent-inc01.component.html',
  styleUrls: ['./parent-inc01.component.css']
})
export class ParentInc01Component implements OnInit {


  cpt = 0;

  constructor() { }

  ngOnInit(): void {
  }

  inc(){
    this.cpt++;
  }

}
