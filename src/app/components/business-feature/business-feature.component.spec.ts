import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessFeatureComponent } from './business-feature.component';

describe('BusinessFeatureComponent', () => {
  let component: BusinessFeatureComponent;
  let fixture: ComponentFixture<BusinessFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
