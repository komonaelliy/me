import { useState } from 'react';
import BlogHeader from '../components/blog/BlogHeader';
import '../styles/ctfwriteup.css';

interface CTFChallenge {
  id: number;
  title: string;
  category: string;
  difficulty: string;
  points: number;
  solved: boolean;
  flag?: string;
  hint: string;
  description: string;
  solution?: string;
}

export default function CTF() {
  const [selectedChallenge, setSelectedChallenge] = useState<CTFChallenge | null>(null);
  const [userInput, setUserInput] = useState('');
  const [showSolution, setShowSolution] = useState(false);

  const [challenges] = useState<CTFChallenge[]>([
    {
      id: 1,
      title: "The Matrix Code",
      category: "Cryptography",
      difficulty: "Easy",
      points: 100,
      solved: true,
      flag: "FLAG{M4TR1X_D3C0D3D}",
      hint: "Look for patterns in the binary sequence...",
      description: "Agent Smith left a message in the Matrix. Can you decode this binary sequence?\n\n01000110 01001100 01000001 01000111 01111011...",
      solution: `
        1. Convert binary to ASCII
        2. Each byte represents a character
        3. The pattern follows Matrix green code style
        4. Final decoded message: FLAG{M4TR1X_D3C0D3D}
      `
    },
    {
      id: 2,
      title: "Ghost in the Shell",
      category: "Reverse Engineering",
      difficulty: "Medium",
      points: 250,
      solved: false,
      hint: "Check the memory addresses at 0x08048000",
      description: "A mysterious program is running in the background. Reverse engineer it to find the hidden message."
    },
    {
      id: 3,
      title: "Neural Breach",
      category: "Web Exploitation",
      difficulty: "Hard",
      points: 500,
      solved: false,
      hint: "The neural network has a weakness in its input validation",
      description: "Break into the neural network's admin panel. The future depends on it."
    }
  ]);

  const handleChallengeClick = (challenge: CTFChallenge) => {
    setSelectedChallenge(challenge);
    setShowSolution(false);
    setUserInput('');
  };

  return (
    <div className="ctf-container">
      <BlogHeader />
      <div className="ctf-content">
        <div className="ctf-header">
          <h1 className="cyber-glitch" data-text="NEURAL_CHALLENGES">NEURAL_CHALLENGES</h1>
          <div className="stats">
            <span>SOLVED: {challenges.filter(c => c.solved).length}/{challenges.length}</span>
            <span>TOTAL_POINTS: {challenges.reduce((acc, curr) => curr.solved ? acc + curr.points : acc, 0)}</span>
          </div>
        </div>

        <div className="challenge-interface">
          <div className="challenges-list">
            {challenges.map(challenge => (
              <div 
                key={challenge.id} 
                className={`challenge-card ${challenge.solved ? 'solved' : ''}`}
                onClick={() => handleChallengeClick(challenge)}
              >
                <div className="challenge-header">
                  <h3>{challenge.title}</h3>
                  <span className={`difficulty ${challenge.difficulty.toLowerCase()}`}>
                    {challenge.difficulty}
                  </span>
                </div>
                <div className="challenge-meta">
                  <span className="category">[{challenge.category}]</span>
                  <span className="points">{challenge.points} pts</span>
                </div>
              </div>
            ))}
          </div>

          {selectedChallenge && (
            <div className="challenge-details-panel">
              <div className="terminal-window">
                <div className="terminal-header">
                  <span>root@neural-net:~# cat challenge_{selectedChallenge.id}</span>
                </div>
                <div className="terminal-content">
                  <h2>{selectedChallenge.title}</h2>
                  <p className="description">{selectedChallenge.description}</p>
                  <div className="hint">
                    <span className="label">HINT:</span>
                    <p>{selectedChallenge.hint}</p>
                  </div>
                  
                  {selectedChallenge.solved ? (
                    <div className="solution-panel">
                      <button 
                        className="cyber-button"
                        onClick={() => setShowSolution(!showSolution)}
                      >
                        {showSolution ? 'HIDE_SOLUTION' : 'SHOW_SOLUTION'}
                      </button>
                      {showSolution && (
                        <pre className="solution-code">
                          {selectedChallenge.solution}
                        </pre>
                      )}
                    </div>
                  ) : (
                    <div className="input-panel">
                      <input
                        type="text"
                        placeholder="Enter flag..."
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        className="flag-input"
                      />
                      <button className="submit-button">SUBMIT_FLAG</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
