import MatrixRain from '../components/error/MatrixRain';
import ErrorMessage from '../components/error/ErrorMessage';
import Terminal from '../components/common/Terminal';
import '../styles/error.css';

export default function NotFound() {
  return (
    <div className="not-found-container">
      <MatrixRain />
      <div className="error-content">
        <div className="error-number">404</div>
        <div className="error-line"></div>
        <ErrorMessage 
          code="The file is not Available"
          message="THEY IS ALWAYS SOMETHING"
          subMessage="File still not found in the matrix"
        />
        <button className="return-button" onClick={() => window.history.back()}>
          Return to Reality
        </button>
      </div>
      <Terminal text="ERR: Location not found in the cybernet. Initiating emergency protocol..." />
      <div className="geometric-shapes">
        <div className="shape circle"></div>
        <div className="shape square"></div>
        <div className="shape triangle"></div>
      </div>
    </div>
  );
}
