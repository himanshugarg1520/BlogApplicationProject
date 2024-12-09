import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterheaderComponent } from './counterheader.component';

describe('CounterheaderComponent', () => {
  let component: CounterheaderComponent;
  let fixture: ComponentFixture<CounterheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
