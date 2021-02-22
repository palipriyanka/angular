import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFormExampleComponent } from './angular-form-example.component';

describe('AngularFormExampleComponent', () => {
  let component: AngularFormExampleComponent;
  let fixture: ComponentFixture<AngularFormExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularFormExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularFormExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
