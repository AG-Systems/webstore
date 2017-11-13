import React, { Component } from 'react';

import Menu from 'components/Global/Menu';

export default class Main extends Component {
  render() {
    var style = {display: "none"}
    const { children } = this.props; // eslint-disable-line

    return (
      <div className='Main'>
        {/* <Menu /> */}
        <div  className='render'>
        { children }
        </div>
        
      </div>
    );
  }
}
