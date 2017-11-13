import React, { Component } from 'react';
import axios from 'axios';
// Rails.start()


export default class Home extends Component {
    constructor(props) {
      super(props);
      this.state = { products: [{}] };
    
    }
  componentDidMount() {
    axios.get("/api/").then(response => {
      this.setState({ products: response.data });
    });
  }
  render() {
    // var javascript_side_json = JSON.parse(javascript_side_json);

    var items= this.state.products.map((item) => { 
      return ( 
        <div key={ item.id } className='col-sm-6 col-md-4'> 
          <div className='thumbnail' key={ item.id }>
            <img src={ item.picture } alt='' />
              <div className='caption'>
                <h3>{ item.name }</h3> 
                <p>{ item.price }</p>
                <a className='btn btn-primary' href={ '#/products/' + item.id }>Details</a>
              </div>
          </div>
        </div> 
      ) 
    });
    var middle = {width: "90%", margin: "0 auto"}
    return (
            <div className='row' style={ middle }>
                { items }
            </div>
      
      
    );
  }
}
