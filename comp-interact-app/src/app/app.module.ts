import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentInc01Component } from './parent-inc01/parent-inc01.component';
import { ChildInc01Component } from './child-inc01/child-inc01.component';
import { ParentInc02Component } from './parent-inc02/parent-inc02.component';
import { ChildInc02Component } from './child-inc02/child-inc02.component';
import { ParentInc03Component } from './parent-inc03/parent-inc03.component';
import { ChildInc03Component } from './child-inc03/child-inc03.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentInc01Component,
    ChildInc01Component,
    ParentInc02Component,
    ChildInc02Component,
    ParentInc03Component,
    ChildInc03Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
