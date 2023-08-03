import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllWashersComponent } from './admin-all-washers.component';

describe('AdminAllWashersComponent', () => {
  let component: AdminAllWashersComponent;
  let fixture: ComponentFixture<AdminAllWashersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllWashersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAllWashersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});