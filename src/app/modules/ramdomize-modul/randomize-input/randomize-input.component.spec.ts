import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomizeInputComponent } from './randomize-input.component';

describe('RandomizeInputComponent', () => {
  let component: RandomizeInputComponent;
  let fixture: ComponentFixture<RandomizeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomizeInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomizeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
