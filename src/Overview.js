import React from 'react';
import CardSmall from './CardSmall';

import './Overview.css';

const CardSmallList = [
  {
    icon: 'images/icon-facebook.svg',
    pageViews: '87',
    growth: 3,
    key: 1,
  },
  {
    icon: 'images/icon-twitter.svg',
    pageViews: '52',
    growth: 2257,
    key: 2,
  },
  {
    icon: 'images/icon-instagram.svg',
    pageViews: '5462',
    growth: 1375,
    key: 3,
  },
  {
    icon: 'images/icon-youtube.svg',
    pageViews: '87',
    growth: 303,
    key: 4,
  },
  {
    icon: 'images/icon-twitter.svg',
    pageViews: '30k',
    growth: 1375,
    key: 5,
  },
  {
    icon: 'images/icon-instagram.svg',
    pageViews: '117',
    growth: 303,
    key: 6,
  },
  {
    icon: 'images/icon-facebook.svg',
    pageViews: '507',
    growth: 553,
    key: 7,
  },
  {
    icon: 'images/icon-youtube.svg',
    pageViews: '87',
    growth: 303,
    key: 8,
  },
  {
    icon: 'images/icon-facebook.svg',
    pageViews: '107',
    growth: 19,
    key: 9,
  },
  {
    icon: 'images/icon-youtube.svg',
    pageViews: '1407',
    growth: 12,
    key: 10,
  },
];

const Overview = () => {
  return (
    <section className="overview">
      <div className="wrapper">
        <h2>Overview - Today</h2>
        <div className="grid">
          {CardSmallList.map((CardSmallData) => (
            <CardSmall key={CardSmallData.key} {...CardSmallData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
