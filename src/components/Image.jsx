import React from 'react';

export default function Image({ id, img }) {
  return (
    <div className="column">
      <img src={img} alt={`Image ${id}`} />
    </div>
  );
}