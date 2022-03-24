import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildInc03Component } from './child-inc03.component';

describe('ChildInc03Component', () => {
  let component: ChildInc03Component;
  let fixture: ComponentFixture<ChildInc03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildInc03Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildInc03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
