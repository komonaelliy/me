interface ErrorLog {
    timestamp: string;
    error: string;
    context: string;
    url: string;
  }
  
  const errorLogs: ErrorLog[] = [];
  
  export const trackError = (error: Error, context: string) => {
    const errorLog: ErrorLog = {
      timestamp: new Date().toISOString(),
      error: error.message,
      context,
      url: window.location.href
    };
  
    errorLogs.push(errorLog);
    console.error('[Error Tracked]:', errorLog);
  
    // Here you could send to an analytics service
    // sendToAnalytics(errorLog);
  };
  
  export const getErrorLogs = () => errorLogs;
  
  export const clearErrorLogs = () => errorLogs.length = 0;
  