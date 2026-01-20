import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trait } from './trait';

describe('Trait', () => {
  let component: Trait;
  let fixture: ComponentFixture<Trait>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Trait]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Trait);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
