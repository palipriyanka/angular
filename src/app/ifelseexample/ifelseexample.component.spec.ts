import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfelseexampleComponent } from './ifelseexample.component';

describe('IfelseexampleComponent', () => {
  let component: IfelseexampleComponent;
  let fixture: ComponentFixture<IfelseexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfelseexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfelseexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
