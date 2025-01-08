import Terminal from '../components/Terminal';
import Background from '../components/Background';
import Cursor from '../components/Cursor';
import '../styles/style.css';

export default function Home() {
  return (
    <>
      <div id="connecting-dots" className="connecting-dots">
        <canvas id="canvas"></canvas>
      </div>
      <Terminal />
      <Background />
      <Cursor />
    </>
  );
}
