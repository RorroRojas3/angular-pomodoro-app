import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsCardComponent } from './donations-card.component';

describe('DonationsCardComponent', () => {
  let component: DonationsCardComponent;
  let fixture: ComponentFixture<DonationsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
