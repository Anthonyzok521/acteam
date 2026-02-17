"use client";

import { useEffect, useRef, useState } from "react";

import { useTheme } from "next-themes";

interface Particle {
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
  speed: number;
  opacity: number;
}

export default function ParticleLogo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const { theme } = useTheme();

  // Initialize particles
  const initParticles = () => {
    if (!dimensions.width || !dimensions.height) return;

    const particles: Particle[] = [];
    const particleCount = Math.min(dimensions.width, dimensions.height) * 0.3;

    for (let i = 0; i < particleCount; i++) {
      const isDark = theme === "dark";

      particles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        z: Math.random() * 1000, // Profundidad para efecto 3D
        size: Math.random() * 3 + 1,
        color: isDark ? "hsl(217, 91%, 60%)" : "hsl(221, 83%, 53%)",
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    particlesRef.current = particles;
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        setDimensions({ width: canvas.width, height: canvas.height });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Initialize particles when dimensions or theme changes
  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      initParticles();
    }
  }, [dimensions, theme]);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || !dimensions.width || !dimensions.height) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const centerX = dimensions.width / 2;
    const centerY = dimensions.height / 2;

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      particlesRef.current.forEach((particle) => {
        // Mover partícula hacia adelante (disminuir Z)
        particle.z -= particle.speed;

        // Si la partícula sale de la vista, reiniciarla
        if (particle.z <= 0) {
          particle.z = 1000;
          particle.x = Math.random() * dimensions.width;
          particle.y = Math.random() * dimensions.height;
        }

        // Calcular posición con perspectiva
        const scale = 1000 / particle.z;
        const projectedX = (particle.x - centerX) * scale + centerX;
        const projectedY = (particle.y - centerY) * scale + centerY;

        // Calcular tamaño con perspectiva
        const projectedSize = particle.size * scale;

        // Verificar si está dentro de la pantalla
        if (
          projectedX > -50 &&
          projectedX < dimensions.width + 50 &&
          projectedY > -50 &&
          projectedY < dimensions.height + 50 &&
          projectedSize > 0
        ) {
          // Mouse interaction
          const mouseDistance = Math.hypot(
            mousePosition.x - projectedX,
            mousePosition.y - projectedY,
          );

          const mouseRadius = 100;
          const isDark = theme === "dark";

          if (mouseDistance < mouseRadius) {
            // Increase size and glow when mouse is near
            const glowFactor = 1 - mouseDistance / mouseRadius;
            const maxGlowSize = projectedSize * 3;

            // Draw glow
            const glowColor = isDark
              ? `rgba(59, 130, 246, ${glowFactor * 0.5})`
              : `rgba(37, 99, 235, ${glowFactor * 0.5})`;

            ctx.beginPath();
            ctx.arc(projectedX, projectedY, projectedSize * 2, 0, Math.PI * 2);
            ctx.fillStyle = glowColor;
            ctx.fill();

            // Draw enhanced particle
            ctx.beginPath();
            ctx.arc(
              projectedX,
              projectedY,
              projectedSize + maxGlowSize * glowFactor * 0.5,
              0,
              Math.PI * 2,
            );
            ctx.fillStyle = isDark
              ? `rgba(59, 130, 246, ${particle.opacity + glowFactor * 0.5})`
              : `rgba(37, 99, 235, ${particle.opacity + glowFactor * 0.5})`;
            ctx.fill();
          } else {
            // Draw normal particle
            ctx.beginPath();
            ctx.arc(projectedX, projectedY, projectedSize, 0, Math.PI * 2);
            ctx.fillStyle = isDark
              ? `rgba(59, 130, 246, ${particle.opacity * (scale * 0.8)})`
              : `rgba(37, 99, 235, ${particle.opacity * (scale * 0.8)})`;
            ctx.fill();
          }
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [dimensions, mousePosition, theme]);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />
  );
}
