import { TestBed } from '@angular/core/testing';

import { MyratingService } from './myrating.service';

describe('MyratingService', () => {
  let service: MyratingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyratingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});