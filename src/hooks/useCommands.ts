import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useCommands = () => {
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const navigate = useNavigate();

  const commandMap = {
    'blog': '/blog',
    'about': '/about',
    'home': '/',
    'ctf': '/CTF',
    'game': '/game',
    'clear': 'clear',
    'help': 'help'
  } as const;

  const handleCommand = (command: string) => {
    const trimmedCommand = command.trim().toLowerCase();
    
    addLine(`┌[root㉿playerkomona]└→ ${trimmedCommand}`);

    if (trimmedCommand === 'clear') {
      setTerminalLines([]);
      return;
    }

    if (trimmedCommand === 'help') {
      addLine(`Available commands:
        - blog    : Access blog posts
        - about   : About me
        - game    : Play games
        - home    : Return to homepage
        - ctf     : CTF writeups
        - clear   : Clear terminal
        - help    : Show this help menu`);
      return;
    }

    if (commandMap[trimmedCommand as keyof typeof commandMap]) {
      navigate(commandMap[trimmedCommand as keyof typeof commandMap]);
      console.log(`Navigating to ${commandMap[trimmedCommand as keyof typeof commandMap]}`);
    } else {
      addLine(`Invalid command: ${trimmedCommand}`);
    }
  };

  const addLine = (text: string) => {
    setTerminalLines(prev => [...prev, text]);
  };

  return { handleCommand, terminalLines };
};
