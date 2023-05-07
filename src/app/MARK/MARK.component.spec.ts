/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MARKComponent } from './MARK.component';

describe('MARKComponent', () => {
  let component: MARKComponent;
  let fixture: ComponentFixture<MARKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MARKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MARKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
