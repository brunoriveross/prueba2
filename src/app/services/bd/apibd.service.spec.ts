import { TestBed } from '@angular/core/testing';

import { ApibdService } from './apibd.service';

describe('ApibdService', () => {
  let service: ApibdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApibdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
