import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import HouseA from './HouseA.png';
import HouseB from './HouseB.jpg';
import HouseC from './House C.jpeg';
import HouseD from './houseD.jpg';
import HouseE from './HouseE.jpg';
import HouseF from './HouseF.png';
import HouseG from './HouseG.jpg';
import HouseH from './HouseH.jpg';
import HouseI from './HouseI.jpeg';
import HouseJ from './HouseJ.webp';
import './Login.css';

const houses = [
  {
    id: 1,
    name: 'House A',
    image: HouseA,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: '$1000/month'
  },
  {
    id: 2,
    name: 'House B',
    image: HouseB,
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$1200/month'
  },
  {
    id: 3,
    name: 'House C',
    image: HouseC,
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: '$1500/month'
  },
  {
    id: 4,
    name: 'House D',
    image: HouseD,
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    price: '$1800/month'
  },
  {
    id: 5,
    name: 'House E',
    image: HouseE,
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: '$2000/month'
  },
  {
    id: 6,
    name: 'House F',
    image: HouseF,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: '$1000/month'
  },
  {
    id: 7,
    name: 'House G',
    image: HouseG,
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$1200/month'
  },
  {
    id: 8,
    name: 'House H',
    image: HouseH,
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: '$1500/month'
  },
  {
    id: 9,
    name: 'House I',
    image: HouseI,
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    price: '$1800/month'
  },
  {
    id: 10,
    name: 'House J',
    image: HouseJ,
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: '$2000/month'
  }
];

const Login = () => {
  const navigate = useNavigate();
  const [showChat, setShowChat] = useState(false);

  const handleFavorite = (houseId) => {
    navigate('/LoginForm');
  };

  const handleBook = (houseId) => {
    navigate('/LoginForm');
  };

  const handleButton = (houseName) => {
    if (!houseName) {
      addResponseMessage('Please specify the house name.'); // Prompt the user to specify the house name
      return;
    }
  
    const house = houses.find((h) => h.name.toLowerCase() === houseName.toLowerCase()); // Use case-insensitive comparison
    if (house) {
      const message = `${house.name} Details:\n${house.description}\nPrice: ${house.price}`;
      addResponseMessage(message);
    } else {
      addResponseMessage(`Sorry, details for ${houseName} are not available.`);
    }
  };
  
  const handleNewUserMessage = (newMessage) => {
    if (typeof newMessage === 'string') {
      const trimmedMessage = newMessage.trim().toLowerCase();
      if (trimmedMessage === 'hello' || trimmedMessage === 'hi') {
        addResponseMessage('Hi there! How can I assist you today?');
      } else if (trimmedMessage === 'house details' || trimmedMessage === 'amount' || trimmedMessage === 'location') {
        addResponseMessage('Please specify the house name.'); // Prompt the user to specify the house name
      } else {
        handleButton(trimmedMessage); // Pass the trimmedMessage as houseName argument
      }
    } else {
      addResponseMessage("Please enter a valid text message.");
    }
  };
  




  return (
    <div className="login-container">
      <div className="header">
        <div className="project-name">easystay</div>
        <div className="auth-buttons">
          <button className="login-button" onClick={() => navigate('/LoginForm')}>
            Login
          </button>
          <button className="signup-button" onClick={() => navigate('/Signup')}>
            Signup
          </button>
          <button className="chat-button" onClick={() => setShowChat(!showChat)}>
            {showChat ? 'Close Chat' : 'Open Chat'}
          </button>
        </div>
      </div>
      <div className="main-body">
        {houses.map((house) => (
          <div key={house.id} className="house-card">
            <img src={house.image} alt={house.name} className="house-image" />
            <div className="house-details">
              <h3>{house.name}</h3>
              <p>{house.description}</p>
              <p>Price: {house.price}</p>
              <button onClick={() => handleFavorite(house.id)}>Add to Favorites</button>
              <button onClick={() => handleBook(house.id)}>Book</button>
            </div>
          </div>
        ))}
      </div>
      {showChat && (
        <Widget
          handleNewUserMessage={handleNewUserMessage}
          title="Chat Bot"
          subtitle="Ask any questions!"
          senderPlaceHolder="Type your message here..."
          showCloseButton={true}
        />
      )}
    </div>
  );
};

export default Login;
