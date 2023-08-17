/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StaffreplyComponent } from './Staffreply.component';

describe('StaffreplyComponent', () => {
  let component: StaffreplyComponent;
  let fixture: ComponentFixture<StaffreplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffreplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffreplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
