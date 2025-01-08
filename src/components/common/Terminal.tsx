interface TerminalProps {
    text: string;
    type?: 'error' | 'success' | 'warning';
  }
  
  export default function Terminal({ text, type = 'error' }: TerminalProps) {
    return (
      <div className={`terminal-window ${type}`}>
        <div className="terminal-header">
          <span className="terminal-title">system@matrix:~$</span>
        </div>
        <div className="terminal-content">
          <span className="prompt"></span>
          <span className="text">{text}</span>
          <span className="cursor">█</span>
        </div>
      </div>
    );
  }
  