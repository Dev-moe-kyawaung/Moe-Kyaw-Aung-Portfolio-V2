window.addEventListener("DOMContentLoaded", () => {
  if (typeof particlesJS === "undefined") return;

  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: { enable: true, value_area: 900 }
      },
      color: { value: ["#22d3ee", "#60a5fa", "#a78bfa"] },
      shape: { type: "circle" },
      opacity: {
        value: 0.45,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0.15, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: true, speed: 2, size_min: 0.5, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 160,
        color: "#64748b",
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        repulse: { distance: 120, duration: 0.4 },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });
});
