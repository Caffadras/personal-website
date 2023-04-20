import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingsSectionComponent } from './greetings-section.component';

describe('GreetingsSectionComponent', () => {
  let component: GreetingsSectionComponent;
  let fixture: ComponentFixture<GreetingsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetingsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetingsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
