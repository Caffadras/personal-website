export const particleConfig = {
  background: {
    color: {
      value: 'white',
    },
  },
  fpsLimit: 60,
  interactivity: {
    detectsOn: 'canvas',
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 30,
        speed: 1,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: '#a9a9a9',
    },
    links: {
      color: '#a9a9a9',
      distance: 200,
      enable: true,
      opacity: 0.7,
      width: 1.5,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 1,
    },
    shape: {
      type: 'diamond',
    },
    size: {
      random: true,
      value: 3,
    },
  },
  detectRetina: true,
};
