import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyQuizAttemptsComponent } from './my-quiz-attempts.component';

describe('MyQuizAttemptsComponent', () => {
  let component: MyQuizAttemptsComponent;
  let fixture: ComponentFixture<MyQuizAttemptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyQuizAttemptsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyQuizAttemptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
