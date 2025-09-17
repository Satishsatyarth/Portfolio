
import { useState, useEffect } from "react";

const TypewriterEffect = ({ words, typingSpeed = 200, deletingSpeed = 100, delay = 1800 }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [speed, setSpeed] = useState(typingSpeed);

  useEffect(() => {
    const currentWord = words[loopIndex % words.length];

    let typingTimeout;

    if (isDeleting) {
      setSpeed(deletingSpeed);
      typingTimeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
      }, speed);
    } else {
      typingTimeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
      }, speed);
    }

    if (!isDeleting && text === currentWord) {
      typingTimeout = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopIndex((prev) => prev + 1);
    }

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, loopIndex, words, typingSpeed, deletingSpeed, delay, speed]);

  return (
    <h2 className="text-4xl font-semibold text-indigo-400">
      {text}
      <span className="animate-pulse">|</span>
    </h2>
  );
};

export default TypewriterEffect;
