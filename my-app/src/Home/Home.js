import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Offers from '../Offers/Offers';
import HomePageForm from '../HomePageForm/HomePageForm';
import Uslugi from '../Uslugi/Uslugi';

import '../App.css';

const Home = () => {
  const homeAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 1000,
  });

  const [showOffers, setShowOffers] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showUslugi, setShowUslugi] = useState(false);  // Добави стейт за видимостта на услугите

  const toggleOffers = () => {
    setShowOffers(!showOffers);
    setShowForm(false);  // Затваряне на формата при превключване на офертите
    setShowUslugi(false); // Затваряне на услугите при превключване на офертите
  };

  const toggleForm = () => {
    setShowForm(!showForm);
    setShowOffers(false); // Затваряне на офертите при отваряне на формата
    setShowUslugi(false); // Затваряне на услугите при отваряне на формата
  };

  const toggleUslugi = () => {
    setShowUslugi(!showUslugi);
    setShowOffers(false); // Затваряне на офертите при отваряне на услугите
    setShowForm(false); // Затваряне на формата при отваряне на услугите
  };

  return (
    <animated.div style={homeAnimation} className="home">
      <div className="stars-container">
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index} className="star">★</span>
        ))}
      </div>
      <h1>Добре дошли в Хотел Парадайс</h1>
      <p>Преживейте лукс и комфорт в сърцето в село Баня</p>
      <button onClick={toggleOffers}>Вижте текущите оферти</button>
      {showOffers && <Offers />}
      <button onClick={toggleUslugi}>Наши Услуги</button>
      {showUslugi && <Uslugi onClose={() => setShowUslugi(false)} />} 
    </animated.div>
  );
}

export default Home;