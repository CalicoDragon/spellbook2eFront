import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellPopup } from './spell-popup';

describe('SpellPopup', () => {
  let component: SpellPopup;
  let fixture: ComponentFixture<SpellPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpellPopup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpellPopup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
