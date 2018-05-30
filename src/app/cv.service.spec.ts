import { TestBed, inject } from '@angular/core/testing';

import { CvService } from './cv-service.service';

describe('CvServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CvService]
    });
  });

  it('should be created', inject([CvService], (service: CvService) => {
    expect(service).toBeTruthy();
  }));
});
