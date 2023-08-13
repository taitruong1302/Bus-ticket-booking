import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewBusComponent } from './create-new-bus.component';

describe('CreateNewBusComponent', () => {
  let component: CreateNewBusComponent;
  let fixture: ComponentFixture<CreateNewBusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNewBusComponent]
    });
    fixture = TestBed.createComponent(CreateNewBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
