import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildInc02Component } from './child-inc02.component';

describe('ChildInc02Component', () => {
  let component: ChildInc02Component;
  let fixture: ComponentFixture<ChildInc02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildInc02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildInc02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
