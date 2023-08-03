import { TestBed } from '@angular/core/testing';

import { ManagewasherService } from './managewasher.service';

describe('ManagewasherService', () => {
  let service: ManagewasherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagewasherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});