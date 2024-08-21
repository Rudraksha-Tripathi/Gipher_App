import { TestBed } from '@angular/core/testing';

import { GiphyAPIService } from './giphy-api.service';

describe('GiphyAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiphyAPIService = TestBed.get(GiphyAPIService);
    expect(service).toBeTruthy();
  });
});
