import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Menu extends Component {
  render() {
    return (
      <div className='Menu'>
        
        <nav className='nav'>
            <div className='container'>
              <div className='nav-left'>
                <a className='nav-item'>
                  Max Site
                </a>
              </div>
          
              <label htmlFor='menu-toggle' className='nav-toggle'>
                <span></span>
                <span></span>
                <span></span>
              </label>
              <input type='checkbox' id='menu-toggle' className='is-hidden'/>
          
              <div className='nav-right nav-menu'>
                <Link to='/' className='nav-item'>Home</Link> 
                <Link to='/products/1' className='nav-item' >Projects</Link>
              </div>
            </div>
          </nav>
        {/* <hr /> 
        <br/>
        */}
      </div>
    );
  }
}
