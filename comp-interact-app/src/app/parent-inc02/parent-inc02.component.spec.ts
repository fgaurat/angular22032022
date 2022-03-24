import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentInc02Component } from './parent-inc02.component';

describe('ParentInc02Component', () => {
  let component: ParentInc02Component;
  let fixture: ComponentFixture<ParentInc02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentInc02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentInc02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
