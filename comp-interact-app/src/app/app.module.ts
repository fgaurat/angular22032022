import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentInc01Component } from './parent-inc01/parent-inc01.component';
import { ChildInc01Component } from './child-inc01/child-inc01.component';
import { ParentInc02Component } from './parent-inc02/parent-inc02.component';
import { ChildInc02Component } from './child-inc02/child-inc02.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentInc01Component,
    ChildInc01Component,
    ParentInc02Component,
    ChildInc02Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
