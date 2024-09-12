import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayInstructorsComponent } from './display-instructors.component';

describe('DisplayInstructorsComponent', () => {
  let component: DisplayInstructorsComponent;
  let fixture: ComponentFixture<DisplayInstructorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayInstructorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayInstructorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
