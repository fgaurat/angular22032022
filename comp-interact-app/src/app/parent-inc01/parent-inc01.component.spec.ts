import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentInc01Component } from './parent-inc01.component';

describe('ParentInc01Component', () => {
  let component: ParentInc01Component;
  let fixture: ComponentFixture<ParentInc01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentInc01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentInc01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
