import React from 'react';
import { useSpring, animated } from 'react-spring';
import { FaHome, FaBed, FaCalendar, FaImage, FaEnvelope } from 'react-icons/fa';

import '../App.css';

const Header = () => {
  const headerAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  return (
    <animated.header style={headerAnimation} className="header">
      <div className="logo">Спа Хотел Парадайс: Стилен Хотел в село Баня</div>
      <nav className="navigation">
        <a href="/"><FaHome /> Начало</a>
        <a href="/rooms"><FaBed /> Стаи</a>
        <a href="/reservation"><FaCalendar /> Резервация</a>
        <a href="/gallery"><FaImage /> Галерия и Новини</a>
        <a href="/contact"><FaEnvelope /> Контакт</a>
      </nav>
    </animated.header>
  );
}

export default Header;