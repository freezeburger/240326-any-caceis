import { TestBed } from '@angular/core/testing';

import { CisLibService } from './cis-lib.service';

describe('CisLibService', () => {
  let service: CisLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CisLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
