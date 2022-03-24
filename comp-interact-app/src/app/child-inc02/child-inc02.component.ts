import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child-inc02',
  templateUrl: './child-inc02.component.html',
  styleUrls: ['./child-inc02.component.css']
})
export class ChildInc02Component implements OnInit {


  cpt = 0
  // avec paramètre
  @Output() increment = new EventEmitter<number>();
  // sans paramètre
  //@Output() increment = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  doEmitEventAp(){
    this.cpt+=10
    this.increment.emit(this.cpt)
  }
  doEmitEventSp(){
    this.increment.emit()
  }

}
