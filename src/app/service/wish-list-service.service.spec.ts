import { TestBed } from '@angular/core/testing';

import { WishListServiceService } from './wish-list-service.service';

describe('WishListServiceService', () => {
  let service: WishListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
