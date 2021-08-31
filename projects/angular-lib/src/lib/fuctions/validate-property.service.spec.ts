import { TestBed } from '@angular/core/testing';

import { ValidatePropertyService } from './validate-property.service';

describe('ValidatePropertyService', () => {
  let service: ValidatePropertyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatePropertyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
