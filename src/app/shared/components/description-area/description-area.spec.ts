import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionArea } from './description-area';

describe('DescriptionArea', () => {
  let component: DescriptionArea;
  let fixture: ComponentFixture<DescriptionArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionArea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionArea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
