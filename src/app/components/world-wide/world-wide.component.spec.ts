import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldWideComponent } from './world-wide.component';

describe('WorldWideComponent', () => {
  let component: WorldWideComponent;
  let fixture: ComponentFixture<WorldWideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldWideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorldWideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
