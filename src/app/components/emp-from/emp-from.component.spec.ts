import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpFromComponent } from './emp-from.component';

describe('EmpFromComponent', () => {
  let component: EmpFromComponent;
  let fixture: ComponentFixture<EmpFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
