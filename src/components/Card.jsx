import React from 'react';

function Card({ title, image, stack, role, link }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>
        <a href={link} target="_blank">
          {title}
        </a>
      </h2>
      <p className="role">{role}</p>
      <p>{stack.join(', ')}</p>
    </div>
  );
}

export default Card;
