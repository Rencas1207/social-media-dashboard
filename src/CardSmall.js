import React from 'react';

import './CardSmall.css';

const CardSmall = ({ icon, pageViews, growth }) => {
  return (
    <div className="card-small">
      <p className="card-small-views">Page Views</p>
      <p className="card-small-icon">
        <span>
          <img src={icon} alt="" />
        </span>
      </p>
      <p className="card-small-number">{pageViews}</p>
      <p className="card-small-percentage">
        <span>
          <img src="images/icon-up.svg" alt="" />
          {growth}%
        </span>
      </p>
    </div>
  );
};

export default CardSmall;
