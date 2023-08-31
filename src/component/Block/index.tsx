import React, { useEffect, useState } from 'react';
import './Block.css';

interface BlockProps {
  index: number;
  children: React.ReactNode;
}

const Block: React.FC<BlockProps> = ({ index, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const blockElement = document.getElementById(`block-${index}`);
      if (blockElement) {
        const blockPosition = blockElement.getBoundingClientRect();
        console.log(`block-${index}`, blockPosition.top, window.innerHeight);
        if (blockPosition.top <= window.innerHeight) {
          setIsVisible(true);
        }
        if (blockPosition.top > window.innerHeight) {
          setIsVisible(false);
        }
      }
    };

    handleScroll();
    const scrollListener = () => {
      handleScroll();
    };

    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  }, [index]);

  return (
    <div
      id={`block-${index}`}
      className={`block ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default Block;
