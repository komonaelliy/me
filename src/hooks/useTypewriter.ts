import { useState, useEffect } from 'react';

export const useTypewriter = (text: string, speed: number = 50) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    setDisplayText(''); // Clear previous text
    let index = 0;
    
    const typeText = () => {
      if (index < text.length) {
        setDisplayText(current => current + text.charAt(index));
        index++;
        setTimeout(typeText, speed);
      }
    };

    typeText();
    return () => setDisplayText('');
  }, [text, speed]);

  return displayText;
};
