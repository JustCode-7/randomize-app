import { TestBed } from '@angular/core/testing';

import { RandomServiceService } from './random-service.service';

describe('RandomServiceService', () => {
  let service: RandomServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
