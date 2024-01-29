import React, { useEffect, useState } from 'react';
import '../styles/RandomCirclesStyles.css';

interface Circle {
  id: number;
  size: number;
  right: number;
  top: number;
  backgroundColor: string;
}

type Dimentions = {
  width: number;
  height: number;
}

interface RamdomCirclesProps {
  dimentions: Dimentions;
}

const RandomCircles: React.FC<RamdomCirclesProps> = ({ dimentions }) => {
  const [circles, setCircles] = useState<Circle[]>([]);

  useEffect(() => {
    const colors: string[] = ['#f6e789', '#c34647', '#e1e1d6', '#585e3c','#98a9b9']

    const generateRandomValue = () => Math.floor(Math.random() * 50);

    const generateRandomColor = () => {
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    }

    const generateRandomCircle = () => {
      const newCircle: Circle = {
        id: Date.now(),
        size: generateRandomValue(),
        right: generateRandomValue(),
        top: generateRandomValue(),
        backgroundColor: generateRandomColor(),
      };

      if (circles.length < 15) {
        setCircles(prevCircles => [...prevCircles, newCircle]);
      }
    };

    const intervalId = setInterval(generateRandomCircle, 800); // Change interval as needed

    return () => clearInterval(intervalId);
  }, [circles.length]);

  return (
    <div
      className="circle-container"
      style={{
        width: dimentions.width / 2.5,
        height: dimentions.width / 2.5
      }}
    >
      {circles.map(circle => (
        <div
          key={circle.id}
          className="animated-circle"
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            right: `${circle.right}%`,
            top: `${circle.top}%`,
            backgroundColor: circle.backgroundColor,
          }}
        />
      ))}
    </div>
  );
};

export default RandomCircles;