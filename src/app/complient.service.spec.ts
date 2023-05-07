/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ComplientService } from './complient.service';

describe('Service: Complient', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComplientService]
    });
  });

  it('should ...', inject([ComplientService], (service: ComplientService) => {
    expect(service).toBeTruthy();
  }));
});
