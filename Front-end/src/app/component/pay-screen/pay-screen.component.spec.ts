import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayScreenComponent } from './pay-screen.component';

describe('PayScreenComponent', () => {
  let component: PayScreenComponent;
  let fixture: ComponentFixture<PayScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayScreenComponent]
    });
    fixture = TestBed.createComponent(PayScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
