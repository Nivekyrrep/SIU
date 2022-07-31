import { TestBed } from '@angular/core/testing';

import { LiveReportService } from './live-report.service';

describe('LiveReportService', () => {
  let service: LiveReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiveReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
