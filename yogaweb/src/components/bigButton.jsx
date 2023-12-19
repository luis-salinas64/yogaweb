import React from 'react';
import './container.css';

const BigButton = ({ description, href }) => (
  <a className="big-button" href={href}>
    {description}
  </a>
);

export default BigButton;