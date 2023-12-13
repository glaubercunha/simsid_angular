import { TestBed } from '@angular/core/testing';

import { EstimativaItemService } from './estimativa-item.service';

describe('EstimativaItemService', () => {
  let service: EstimativaItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstimativaItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
