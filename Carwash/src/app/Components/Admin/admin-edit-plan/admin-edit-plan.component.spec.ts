import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditPlanComponent } from './admin-edit-plan.component';

describe('AdminEditPlanComponent', () => {
  let component: AdminEditPlanComponent;
  let fixture: ComponentFixture<AdminEditPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});