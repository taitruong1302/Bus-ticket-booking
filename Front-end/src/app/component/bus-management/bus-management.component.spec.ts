import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusManagementComponent } from './bus-management.component';

describe('BusManagementComponent', () => {
  let component: BusManagementComponent;
  let fixture: ComponentFixture<BusManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusManagementComponent]
    });
    fixture = TestBed.createComponent(BusManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
