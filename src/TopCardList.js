import React from 'react';
import Card from './Card';

import './TopCardList.css';

const cardListCard = [
  {
    username: '@RenzoCastilla',
    id: 1,
    followers: '1483',
    todayFollower: 12,
    icon: 'images/icon-facebook.svg',
    name: 'facebook',
  },
  {
    username: '@RenzoCastilla',
    id: 2,
    followers: '28k',
    todayFollower: 20,
    icon: 'images/icon-twitter.svg',
    name: 'twitter',
  },
  {
    username: '@RenzoCastilla',
    id: 3,
    followers: 8239,
    todayFollower: 30,
    icon: 'images/icon-instagram.svg',
    name: 'instagram',
  },
  {
    username: '@RenzoCastilla',
    id: 4,
    followers: '11k',
    todayFollower: -50,
    icon: 'images/icon-youtube.svg',
    name: 'youtube',
  },
];

function TopCardList() {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {cardListCard.map((CardData) => (
            <Card key={CardData.id} {...CardData} />
          ))}
          {/* <article className="card twitter">
            <p className="card-title">
              <img src="images/icon-twitter.svg" alt="" />
              @RenzoCastilla
            </p>
            <p className="card-followers">
              <span className="card-followers-number">1044</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="images/icon-up.svg" alt="" />
              99 Today
            </p>
          </article>
          <article className="card instagram">
            <p className="card-title">
              <img src="images/icon-instagram.svg" alt="" />
              @RenzoCastilla
            </p>
            <p className="card-followers">
              <span className="card-followers-number">11k</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="images/icon-up.svg" alt="" />
              1099 Today
            </p>
          </article>
          <article className="card youtube">
            <p className="card-title">
              <img src="images/icon-youtube.svg" alt="" />
              @RenzoCastilla
            </p>
            <p className="card-followers">
              <span className="card-followers-number">8239</span>
              <span className="card-followers-title">Subscribers</span>
            </p>
            <p className="card-today down">
              <img src="images/icon-down.svg" alt="" />
              144 Today
            </p>
          </article> */}
        </div>
      </div>
    </section>
  );
}

export default TopCardList;
