import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroParticlesComponent } from './hero-particles.component';

describe('HeroParticlesComponent', () => {
  let component: HeroParticlesComponent;
  let fixture: ComponentFixture<HeroParticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroParticlesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroParticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
