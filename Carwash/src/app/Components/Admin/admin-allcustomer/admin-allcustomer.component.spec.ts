import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllcustomerComponent } from './admin-allcustomer.component';

describe('AdminAllcustomerComponent', () => {
  let component: AdminAllcustomerComponent;
  let fixture: ComponentFixture<AdminAllcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllcustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAllcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});