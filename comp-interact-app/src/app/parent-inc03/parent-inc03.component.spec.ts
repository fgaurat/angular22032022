import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentInc03Component } from './parent-inc03.component';

describe('ParentInc03Component', () => {
  let component: ParentInc03Component;
  let fixture: ComponentFixture<ParentInc03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentInc03Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentInc03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
