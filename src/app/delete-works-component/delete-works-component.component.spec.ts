import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWorksComponent } from './delete-works-component.component';

describe('DeleteWorksComponentComponent', () => {
  let component: DeleteWorksComponent;
  let fixture: ComponentFixture<DeleteWorksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteWorksComponent]
    });
    fixture = TestBed.createComponent(DeleteWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
