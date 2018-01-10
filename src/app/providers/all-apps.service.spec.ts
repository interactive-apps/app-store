import { TestBed, inject } from '@angular/core/testing';

import { AllAppsService } from './all-apps.service';

describe('AllAppsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllAppsService]
    });
  });

  it('should be created', inject([AllAppsService], (service: AllAppsService) => {
    expect(service).toBeTruthy();
  }));
});
