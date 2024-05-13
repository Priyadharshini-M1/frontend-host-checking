import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'
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
import FavoriteLogo from './addFav.jpg'; // Import your favorite logo image

const housesData = [
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
const Home = () => {
  const navigate = useNavigate();
    const [favoriteHouses, setFavoriteHouses] = useState([]);
    const [showFavorites, setShowFavorites] = useState(false);
  
    const addToFavorites = (houseId) => {
      const houseToAdd = housesData.find((house) => house.id === houseId);
      if (houseToAdd && !favoriteHouses.some((h) => h.id === houseToAdd.id)) {
        setFavoriteHouses([...favoriteHouses, houseToAdd]);
      }
    };

    const handleBook = () =>{
      navigate('/Book');
    }
  
    return (
      <div className="login-container">
        <div className="header">
          <div className="project-name">easystay</div>
          <img
            src={FavoriteLogo}
            alt="Favorite Logo"
            className="favorite-logo"
            onClick={() => setShowFavorites(!showFavorites)}
          />
        </div>
        <div className="main-body">
          {showFavorites ? (
            favoriteHouses.map((house) => (
              <div key={house.id} className="house-card">
                <img src={house.image} alt={house.name} className="house-image" />
                <div className="house-details">
                  <h3>{house.name}</h3>
                  <p>{house.description}</p>
                  <p>Price: {house.price}</p>
                  <button onClick={() => addToFavorites(house.id)}>Add to Favorites</button>
                  <button>Book</button>
                </div>
              </div>
            ))
          ) : (
            housesData.map((house) => (
              <div key={house.id} className="house-card">
                <img src={house.image} alt={house.name} className="house-image" />
                <div className="house-details">
                  <h3>{house.name}</h3>
                  <p>{house.description}</p>
                  <p>Price: {house.price}</p>
                  <button onClick={() => addToFavorites(house.id)}>Add to Favorites</button>
                  <button onClick={handleBook}>Book</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };
  
  export default Home;