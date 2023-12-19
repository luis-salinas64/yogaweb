import React from 'react';
import './container.css';

const ShortButton = ({ description, href }) => (
  <a className="short-button" href={href}>
    {description}
  </a>
);

export default ShortButton;