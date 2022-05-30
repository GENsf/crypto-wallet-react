import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className='header'>
      <section className="container">
        <p><Link to='/'>BCS</Link><span>{props.title}</span></p>
      </section>
    </header>
  );
};

export default Header;