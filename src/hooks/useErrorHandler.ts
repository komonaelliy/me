import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { trackError } from '../utils/errorTracking';

export function useErrorHandler() {
  const navigate = useNavigate();

  const handleError = (error: Error, errorInfo?: string) => {
    trackError(error, errorInfo || 'Unknown context');
    
    if (error.message.includes('404')) {
      navigate('/404');
    } else {
      navigate('/500');
    }
  };

  useEffect(() => {
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      handleError(event.reason);
    };

    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    return () => window.removeEventListener('unhandledrejection', handleUnhandledRejection);
  }, []);

  return { handleError };
}
