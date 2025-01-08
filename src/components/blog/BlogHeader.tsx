import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';

export default function BlogHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header>
      <nav className="cyber-nav">
        <div className="glitch-logo" data-text="[PlayerKomona]">[PlayerKomona]</div>
        
        <div 
          className={`menu-trigger cyber-box ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={faTerminal} />
          {isMenuOpen && (
            <div className="terminal-dropdown">
              <div className="terminal-option" onClick={() => navigate('/')}>HOME_</div>
              <div className="terminal-option" onClick={() => navigate('/ctf')}>CTF_</div>
              <div className="terminal-option" onClick={() => navigate('/about')}>ABOUT_</div>
              <div className="terminal-option" onClick={() => navigate('/game')}>GAME_</div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
