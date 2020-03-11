import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthButton from './AuthButton';
function Nav(props) {
  const authObj = props.authObj;

  return (
    <nav
      className='navbar navbar-dark 
      justify-content-lg-center 
      justify-content-md-between
      justify-content-sm-between
      align-items-center'
      style={{ backgroundColor: 'rgb(150,200,100)' }}
    >
      <Link className='nav-link' to={process.env.PUBLIC_URL +'/home'}>
        Home
      </Link>
      <Link className='nav-link' to={process.env.PUBLIC_URL + '/piechart'}>
        Pie Chart
      </Link>
      <Link className='nav-link ' to={process.env.PUBLIC_URL + '/linechart1'}>
        Line Chart One
      </Link>
      <Link className='nav-link ' to={process.env.PUBLIC_URL + '/linechart2'}>
        Line Chart Two
      </Link>
      <AuthButton authObj={authObj} />
    </nav>
  );
}

export default Nav;
