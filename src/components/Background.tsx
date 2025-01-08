import { useEffect, useRef } from 'react';
import { initCanvas, draw } from '../utils/canvas';

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const { width, height } = canvasRef.current.getBoundingClientRect();
    initCanvas(canvasRef.current, width, height);
    draw(canvasRef.current);
  }, []);

  return (
    <div id="connecting-dots" className="connecting-dots">
      <canvas ref={canvasRef} />
    </div>
  );
}
