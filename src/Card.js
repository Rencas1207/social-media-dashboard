import React from 'react';
import './Card.css';

function Card({ username, followers, todayFollower, icon, name }) {
  const cardClass = `card ${name}`;
  return (
    <article className={cardClass}>
      <p className="card-title">
        <img src={icon} alt={name} />
        {username}
      </p>
      <p className="card-followers">
        <span className="card-followers-number">{followers}</span>
        <span className="card-followers-title">Followers</span>
      </p>
      <p className="card-today">
        <img src="images/icon-up.svg" alt={name} />
        {todayFollower} Today
      </p>
    </article>
  );
}

export default Card;
