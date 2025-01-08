import MatrixRain from '../components/error/MatrixRain';
import ErrorMessage from '../components/error/ErrorMessage';
import Terminal from '../components/common/Terminal';
import '../styles/error.css';

export default function ServerError() {
  return (
    <div className="error-container">
      <MatrixRain />
      <ErrorMessage 
        code="500"
        message="SYSTEM_MALFUNCTION"
        subMessage="Critical error in the mainframe"
      />
      <Terminal text="CRITICAL: Neural network overload. Initiating system reboot..." />
    </div>
  );
}
