/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetScoresService } from './get-scores.service';

describe('Service: GetScores', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetScoresService]
    });
  });

  it('should ...', inject([GetScoresService], (service: GetScoresService) => {
    expect(service).toBeTruthy();
  }));
});
