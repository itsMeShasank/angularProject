import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksComponent } from './works-component.component';

describe('WorksComponentComponent', () => {
  let component: WorksComponent;
  let fixture: ComponentFixture<WorksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorksComponent]
    });
    fixture = TestBed.createComponent(WorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
