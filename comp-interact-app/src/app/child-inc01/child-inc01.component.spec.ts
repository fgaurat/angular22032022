import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildInc01Component } from './child-inc01.component';

describe('ChildInc01Component', () => {
  let component: ChildInc01Component;
  let fixture: ComponentFixture<ChildInc01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildInc01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildInc01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
