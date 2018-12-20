import { TestBed } from '@angular/core/testing';

import { SearchYelpService } from './search-yelp.service';

describe('SearchYelpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchYelpService = TestBed.get(SearchYelpService);
    expect(service).toBeTruthy();
  });
});
