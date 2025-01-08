import { useNavigate } from 'react-router-dom';

interface ErrorMessageProps {
  code: string;
  message: string;
  subMessage?: string;
}

export default function ErrorMessage({ code, message, subMessage }: ErrorMessageProps) {
  const navigate = useNavigate();

  return (
    <div className="error-message-container">
      <h1 className="glitch" data-text={code}>{code}</h1>
      <h2 className="cyber-text">{message}</h2>
      {subMessage && <p className="sub-message">{subMessage}</p>}
      <button 
        className="cyber-button" 
        onClick={() => navigate('/')}
      >
        RETURN_TO_MAINFRAME
      </button>
    </div>
  );
}
