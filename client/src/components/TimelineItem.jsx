import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const TimelineItem = ({ id, direction, title, time, description, route }) => (
  <li>
    <Link to={route} className={`timeline-item direction-${direction}`}>
      <div id={id}>
        <div className="flag-wrapper">
          <span className="flag">{title}</span>
          <span className="time-wrapper">
            <span className="time">{time}</span>
          </span>
        </div>
        <div className="desc">{description}</div>
      </div>
    </Link>
  </li>
);

export default TimelineItem;
