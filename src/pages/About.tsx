import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { aboutText } from '../utils/constants';
import '../styles/about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  const [displayText, setDisplayText] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  
  // Removed unused navigate import and declaration

  useEffect(() => {
    setDisplayText('');
    let isMounted = true;
    let index = 0;

    const typeText = () => {
      if (!isMounted) return;
      
      if (index < aboutText.length) {
        setDisplayText(aboutText.slice(0, index + 1));
        index++;
        setTimeout(typeText, 50);
      }
    };

    typeText();
    return () => {
      isMounted = false;
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="about-page">
      <div className="nav-trigger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faTerminal} />
      </div>
      
      <nav className="top-nav" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link to="/">Home</Link>
        <Link to="/CTF/ctfwriteup">CTF Writeups</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/game">Games</Link>
      </nav>

      <div className="terminal-container-about">
        <div className="terminal-content">
          <pre>{displayText}</pre>
        </div>
      </div>

      <div className="social-icons">
        <a href="https://github.com/komonaelliy" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://x.com/player_komona" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://ke.linkedin.com/in/eli-muturi" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://instagram.com/_e.l.l.i.y" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
}
