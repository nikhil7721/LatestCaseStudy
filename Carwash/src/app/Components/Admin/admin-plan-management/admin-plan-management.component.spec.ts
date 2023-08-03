import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPlanManagementComponent } from './admin-plan-management.component';

describe('AdminPlanManagementComponent', () => {
  let component: AdminPlanManagementComponent;
  let fixture: ComponentFixture<AdminPlanManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPlanManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPlanManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});