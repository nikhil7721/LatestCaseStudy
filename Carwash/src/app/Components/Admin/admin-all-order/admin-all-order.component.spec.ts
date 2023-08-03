import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllOrderComponent } from './admin-all-order.component';

describe('AdminAllOrderComponent', () => {
  let component: AdminAllOrderComponent;
  let fixture: ComponentFixture<AdminAllOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAllOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});