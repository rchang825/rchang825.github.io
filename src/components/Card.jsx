import React, { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';

function Card({ title, image, stack, role, link }) {
  const [isHovered, setIsHovered] = useState(false);

  // peekaboo animation
  const peekabooSpring = useSpring({
    transform: isHovered ? 'translateY(0%)' : 'translateY(100%)',
    opacity: isHovered ? 1 : 0,
    config: { tension: 300, friction: 25 }
  });

  // enlarge on hover
  const cardSpring = useSpring({
    transform: isHovered ? 'scale(1.02)' : 'scale(1)',
    config: { tension: 300, friction: 10 }
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <animated.div
      style={cardSpring}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="card-wrapper"
    >
      <div className="card">
        <div className="card-image-container">
          <img src={image} alt={title} className="card-image" />
          <animated.div
            style={peekabooSpring}
            className="peekaboo-overlay"
          >
            <img src='public/images/kitty-peek.png' alt="peeking cat" className="peekaboo-image" />
          </animated.div>
        </div>
        <h2>
          <a href={link} target="_blank">
            {title}
          </a>
        </h2>
        <p className="role">{role}</p>
        <p>{stack.join(', ')}</p>
      </div>
    </animated.div>
  );
}

export default Card;
