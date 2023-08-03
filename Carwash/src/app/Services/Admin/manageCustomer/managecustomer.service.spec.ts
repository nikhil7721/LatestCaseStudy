import { TestBed } from '@angular/core/testing';

import { ManagecustomerService } from './managecustomer.service';

describe('ManagecustomerService', () => {
  let service: ManagecustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagecustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});