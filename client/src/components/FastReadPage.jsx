import React from 'react';
import TimelineItem from './TimelineItem'; // Adjust the path based on your project structure
import '../styles/main.css';  // Adjust path based on the actual location

const exercises = [
  {
    id: 'fastReadEx001',
    direction: 'r',
    title: 'Test Your Speed',
    time: 'First Exercise',
    description: 'During the test, focus on typing accurately rather than speeding up. Don’t worry about getting a low speed result; the goal is to measure and improve your current typing speed.',
    route: '/fastReadEx01' // Add route info for navigation

  },
  {
    id: 'fastReadEx002',
    direction: 'l',
    title: 'Visual Gulp',
    time: 'Steal OTP',
    description: 'Ketchup Numbers',
    route: '/x2' // Add route info for navigation

  },
  {
    id: 'fastReadEx003',
    direction: 'r',
    title: 'Catch Up License Plate',
    time: 'Escape the Matrix',
    description: 'Catch Up License Plate, Super Traffic Officer',
    route: '/x2' // Add route info for navigation

  },
];

const FastReadPage = () => {
  return (
    <div>
      <h1>Fast Reading</h1>
      <ul className="timeline">
        {exercises.map(exercise => (
          <TimelineItem
            key={exercise.id}
            id={exercise.id}
            direction={exercise.direction}
            title={exercise.title}
            time={exercise.time}
            description={exercise.description}
            route={exercise.route} // Pass route prop to TimelineItem

          />
        ))}
      </ul>
    </div>
  );
};

export default FastReadPage;
