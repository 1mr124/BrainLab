import React from 'react';
import TimelineItem from './TimelineItem'; // Adjust the path based on your project structure
import '../styles/main.css';  // Adjust path based on the actual location


// MainPage component
const MainPage = () => {
  const items = [
    {
      id: 'fastRead',
      direction: 'r',
      title: 'Fast Read',
      time: '2 Exercises',
      description: 'Enhance your reading speed with Fast the Reading Program. Practice techniques to read faster and retain more information through interactive drills and exercises.',
      route: '/fastRead' // Add route info for navigation

    },
    {
      id: 'mindGames',
      direction: 'l',
      title: 'Mind Games',
      time: '1 Exercise',
      description: 'Several Mind Games',
    },
    {
      id: 'morseCode',
      direction: 'r',
      title: 'Morse Code',
      time: '1 Exercise',
      description: 'Train Your Morse Code',
    },
    {
      id: 'paletSearch',
      direction: 'l',
      title: 'Search Palet',
      time: '1 Service',
      description: 'باشا مدرش قدامي حاجة',
    },
  ];

  return (
    <div>
      <ul className="timeline">
        {items.map(item => (
          <TimelineItem
            key={item.id}
            id={item.id}
            direction={item.direction}
            title={item.title}
            time={item.time}
            description={item.description}
            route={item.route} // Pass route prop to TimelineItem
          />
        ))}
      </ul>
    </div>
  );
};

export default MainPage;