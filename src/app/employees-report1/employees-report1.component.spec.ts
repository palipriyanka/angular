import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesReport1Component } from './employees-report1.component';

describe('EmployeesReport1Component', () => {
  let component: EmployeesReport1Component;
  let fixture: ComponentFixture<EmployeesReport1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesReport1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesReport1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
