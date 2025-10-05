import React from 'react';

function Card({ title, image, stack, link }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <p>{stack.join(', ')}</p>
      <h2>
        <a href={link} target="_blank">
          {title}
        </a>
      </h2>
    </div>
  );
}

export default Card;
