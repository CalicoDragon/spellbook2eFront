import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepareButton } from './prepare-button';

describe('PrepareButton', () => {
  let component: PrepareButton;
  let fixture: ComponentFixture<PrepareButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrepareButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrepareButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
