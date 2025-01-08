import { useState, FormEvent } from 'react';
import { useLocationData } from '../hooks/useLocation';
import { useCommands } from '../hooks/useCommands';

export default function Terminal() {
  const { location, time } = useLocationData();
  const { handleCommand, terminalLines } = useCommands();
  const [input, setInput] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleCommand(input.toLowerCase().trim());
    setInput('');
  };

  return (
    <div className="terminal">
      <div className="terminal-content" style={{ marginTop: "200px" }}>
        <p className="terminal__line permanent">
          Hello: <span className="green">&lt;</span>
          <span className="green" id="ip">{location?.ip}</span>
          <span className="green">&gt;</span>
        </p>
        <p className="terminal__line permanent">
          How the weather in <span className="country green">
            {location?.country_name} ({location?.country_code})
          </span>
        </p>
        <p className="terminal__line permanent">
          Region: <span className="region green">
            {location?.city}, {location?.region}
          </span>
        </p>
        <p className="terminal__line permanent">
          Local Time: <span className="local-time green">{time}</span>
        </p>
        <p style={{ 
          border: "none", 
          borderTop: "2px dashed #00fff2", 
          width: "100vw", 
          left: 0,
          position: "relative"
        }}/>
        <p className="terminal__line permanent">Terminal initialized...</p>
        <p className="terminal__line permanent">Type 'help' to see available commands</p>
        {terminalLines.map((line, index) => (
          <div key={index} className="terminal__line">{line}</div>
        ))}
      </div>
      <form className="search__form" onSubmit={handleSubmit}>
        <div className="terminal-input-line">
          <span className="prompt">┌[root㉿playerkomona]</span>
          <span className="prompt-bottom">└→</span>
          <input 
            type="search" 
            className="search__input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type help" 
            autoComplete="off" 
            autoCorrect="off" 
            autoCapitalize="none" 
            spellCheck={false}
            maxLength={6}
          />
        </div>
      </form>
    </div>
  );
}