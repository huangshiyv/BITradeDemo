import { TestBed } from '@angular/core/testing';

import { PartnerInfoService } from './partner-info.service';

describe('PartnerInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PartnerInfoService = TestBed.get(PartnerInfoService);
    expect(service).toBeTruthy();
  });
});
