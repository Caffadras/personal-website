import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-particles',
  templateUrl: './hero-particles.component.html',
  styleUrls: ['./hero-particles.component.css'],
})
export class HeroParticlesComponent {
  particlesOptions = {
    fullScreen: { enable: false },
    background: {
      color: {
        value: '#fff',
      },
    },
    fpsLimit: 120,
    particles: {
      color: {
        value: '#000',
      },
      move: {
        bounce: false,
        enable: true,
        random: false,
        speed: 2,
        straight: false,
      },
      number: { density: { enable: true, area: 800 }, value: 80 },
      opacity: {
        value: 0.1,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };
}
