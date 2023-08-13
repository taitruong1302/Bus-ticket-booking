import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBusInfoComponent } from './edit-bus-info.component';

describe('EditBusInfoComponent', () => {
  let component: EditBusInfoComponent;
  let fixture: ComponentFixture<EditBusInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditBusInfoComponent]
    });
    fixture = TestBed.createComponent(EditBusInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
