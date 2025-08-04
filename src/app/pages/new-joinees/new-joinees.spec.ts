import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJoineesComponent } from './new-joinees';

describe('NewJoinees', () => {
  let component: NewJoineesComponent;
  let fixture: ComponentFixture<NewJoineesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewJoineesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewJoineesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
