import { TestBed } from '@angular/core/testing';

import { IamaliveService } from './iamalive.service';

describe('IamaliveService', () => {
  let service: IamaliveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IamaliveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
