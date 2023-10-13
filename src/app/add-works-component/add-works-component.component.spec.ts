import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorksComponent } from './add-works-component.component';

describe('AddWorksComponentComponent', () => {
  let component: AddWorksComponent;
  let fixture: ComponentFixture<AddWorksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddWorksComponent]
    });
    fixture = TestBed.createComponent(AddWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
