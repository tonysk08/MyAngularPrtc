import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTryCComponent } from './second-try-c.component';

describe('SecondTryCComponent', () => {
  let component: SecondTryCComponent;
  let fixture: ComponentFixture<SecondTryCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondTryCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondTryCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
