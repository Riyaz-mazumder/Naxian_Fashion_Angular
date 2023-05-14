import { TestBed } from '@angular/core/testing';

import { SearchSearviceService } from './search-searvice.service';

describe('SearchSearviceService', () => {
  let service: SearchSearviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchSearviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
