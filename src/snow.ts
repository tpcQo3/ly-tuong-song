
interface Snowflake {
  x: number;
  y: number;
  radius: number;
  density: number;
  opacity: number;
}

const canvas = document.getElementById('snow-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

if (ctx) {
  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const maxFlakes = 70;
  const snowflakes: Snowflake[] = [];

  for (let i = 0; i < maxFlakes; i++) {
    snowflakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      density: Math.random() * 1 + 0.5,
      opacity: Math.random() * 0.6 + 0.2
    });
  }

  let angle = 0;
  const drawSnowflakes = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    angle += 0.01;

    for (let i = 0; i < maxFlakes; i++) {
      const flake = snowflakes[i];

      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
      ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2, true);
      ctx.fill();

      flake.y += flake.density;
      flake.x += Math.sin(angle + flake.density) * 0.5;

      if (flake.y > canvas.height) {
        snowflakes[i] = {
          x: Math.random() * canvas.width,
          y: -10,
          radius: flake.radius,
          density: flake.density,
          opacity: flake.opacity
        };
      }
    }

    requestAnimationFrame(drawSnowflakes);
  };

  drawSnowflakes();
}