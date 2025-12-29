"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

export default function SnowParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fpsLimit: 60,
        particles: {
          number: {
            value: 80, // Количество снежинок
            density: { enable: true },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: { min: 0.1, max: 0.5 }, // Делаем их едва заметными
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 3 },
          },
          move: {
            enable: true,
            direction: "bottom", // Падают вниз
            speed: 1,
            straight: false,
            outModes: { default: "out" },
          },
          wobble: {
            enable: true, // Слегка покачиваются при падении
            distance: 5,
            speed: 1,
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "bubble", // Снежинки немного увеличиваются при наведении
            },
          },
        },
        detectRetina: true,
        fullScreen: {
          enable: true,
          zIndex: 1, // Снег будет за контентом (замени на 101, если хочешь поверх)
        },
      }}
    />
  );
}
