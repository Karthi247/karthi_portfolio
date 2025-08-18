import { useState, useEffect } from "react";

export const useTypingEffect = (
  words: string[],
  typingSpeed = 100, // Speed for typing each letter
  pauseTime = 1500   // Pause time after a word is fully typed
) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing forward
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
        if (text.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }, typingSpeed);
    } else {
      // Deleting backward
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, typingSpeed / 2);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, pauseTime]);

  return text;
};
