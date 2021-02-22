import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexampleComponent } from './forexample.component';

describe('ForexampleComponent', () => {
  let component: ForexampleComponent;
  let fixture: ComponentFixture<ForexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
