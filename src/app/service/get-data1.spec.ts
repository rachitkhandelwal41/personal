import { TestBed } from '@angular/core/testing';

import { GetData1 } from './get-data1';

describe('GetData1', () => {
  let service: GetData1;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetData1);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
