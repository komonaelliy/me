interface Point {
    x: number;
    y: number;
    vx: number;
    vy: number;
  }
  
  const colors = {
    line: 'rgba(0, 255, 150, 0.2)',
    point: 'rgba(0, 255, 150, 1)',
    point_stroke: 'rgba(0, 255, 150, 0.4)'
  };
  
  let points: Point[] = [];
  const amount = 150;
  const radius = 1;
  
  export const initCanvas = (canvas: HTMLCanvasElement, width: number, height: number) => {
    canvas.width = width;
    canvas.height = height;
    points = Array.from({ length: amount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5
    }));
  };
  
  export const draw = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
  
    const connect = () => {
      points.forEach((point, i) => {
        points.slice(i + 1).forEach(otherPoint => {
          const dx = point.x - otherPoint.x;
          const dy = point.y - otherPoint.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
  
          if (dist < 200) {
            const opacity = 1 - (dist/200);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 255, 150, ${opacity * 0.2})`;
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
            ctx.stroke();
          }
        });
      });
    };
  
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      connect();
  
      points.forEach(point => {
        ctx.beginPath();
        ctx.fillStyle = colors.point;
        ctx.strokeStyle = colors.point_stroke;
        ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
  
        point.x += point.vx;
        point.y += point.vy;
  
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;
      });
  
      requestAnimationFrame(animate);
    };
  
    animate();
  };
  