import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-inc02',
  templateUrl: './parent-inc02.component.html',
  styleUrls: ['./parent-inc02.component.css']
})
export class ParentInc02Component implements OnInit {


  cpt=0

  constructor() { }

  ngOnInit(): void {
  }
  
  // avec paramètre
  onIncrementAp(cpt:number){
    this.cpt = cpt
  }
  // sans paramètre
  onIncrementSp(){
    this.cpt++
  }
}
