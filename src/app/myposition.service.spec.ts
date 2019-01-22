import { TestBed } from '@angular/core/testing';

import { MypositionService } from './myposition.service';

describe('MypositionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MypositionService = TestBed.get(MypositionService);
    expect(service).toBeTruthy();
  });
});
