/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StaffattendenceService } from './staffattendence.service';

describe('Service: Staffattendence', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StaffattendenceService]
    });
  });

  it('should ...', inject([StaffattendenceService], (service: StaffattendenceService) => {
    expect(service).toBeTruthy();
  }));
});
