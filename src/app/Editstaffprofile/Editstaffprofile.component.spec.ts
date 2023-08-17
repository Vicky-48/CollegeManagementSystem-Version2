/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditstaffprofileComponent } from './Editstaffprofile.component';

describe('EditstaffprofileComponent', () => {
  let component: EditstaffprofileComponent;
  let fixture: ComponentFixture<EditstaffprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditstaffprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditstaffprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
