import { TestBed, inject } from '@angular/core/testing';

import { HmctsrolesLibService } from './hmctsroles-lib.service';

xdescribe('HmctsrolesLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HmctsrolesLibService]
    });
  });

  it('should be created', inject([HmctsrolesLibService], (service: HmctsrolesLibService) => {
    expect(service).toBeTruthy();
  }));
});
