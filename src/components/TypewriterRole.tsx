import React, { useState, useEffect } from 'react';

interface TypewriterRoleProps {
  roles?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

const DEFAULT_ROLES = [
  "BSc Computer Science Student",
  "AI & Data Science Specialist",
  "Python & Java Developer",
  "Machine Learning Enthusiast",
  "Problem Solver & Tech Explorer"
];

export const TypewriterRole: React.FC<TypewriterRoleProps> = ({
  roles = DEFAULT_ROLES,
  typingSpeed = 90,
  deletingSpeed = 50,
  pauseDuration = 1800,
}) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (currentText.length < fullText.length) {
        timer = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, roles, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="inline-flex items-center">
      <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-emerald-300 bg-clip-text text-transparent font-semibold">
        {currentText}
      </span>
      <span className="w-0.5 h-5 ml-1 bg-cyan-400 inline-block animate-pulse shadow-[0_0_8px_#00f0ff]" />
    </span>
  );
};
