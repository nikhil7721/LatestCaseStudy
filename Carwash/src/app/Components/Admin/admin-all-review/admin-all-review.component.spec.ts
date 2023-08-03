import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllReviewComponent } from './admin-all-review.component';

describe('AdminAllReviewComponent', () => {
  let component: AdminAllReviewComponent;
  let fixture: ComponentFixture<AdminAllReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAllReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});