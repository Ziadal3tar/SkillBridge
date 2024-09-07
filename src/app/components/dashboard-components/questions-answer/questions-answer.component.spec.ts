import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsAnswerComponent } from './questions-answer.component';

describe('QuestionsAnswerComponent', () => {
  let component: QuestionsAnswerComponent;
  let fixture: ComponentFixture<QuestionsAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionsAnswerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionsAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
