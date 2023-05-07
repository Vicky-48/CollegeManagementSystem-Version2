/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AttendenceService } from './attendence.service';

describe('Service: Attendence', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AttendenceService]
    });
  });

  it('should ...', inject([AttendenceService], (service: AttendenceService) => {
    expect(service).toBeTruthy();
  }));
});
