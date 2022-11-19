import { TestBed } from '@angular/core/testing';

import { RoboGardenNotesApiService } from './robo-garden-notes-api.service';

describe('RoboGardenNotesApiService', () => {
  let service: RoboGardenNotesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoboGardenNotesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
