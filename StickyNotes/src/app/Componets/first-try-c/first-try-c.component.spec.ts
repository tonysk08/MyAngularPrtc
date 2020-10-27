import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTryCComponent } from './first-try-c.component';

describe('FirstTryCComponent', () => {
  let component: FirstTryCComponent;
  let fixture: ComponentFixture<FirstTryCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstTryCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstTryCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
