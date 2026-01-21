import { TestBed } from '@angular/core/testing';

import { PersonalSpellData } from './personal-spell-data';

describe('PersonalSpellData', () => {
  let service: PersonalSpellData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalSpellData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
