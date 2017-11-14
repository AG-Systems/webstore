import React, { Component } from 'react';
import axios from 'axios';
import $ from "jquery";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

export default class Show extends Component {
   constructor(props) {
      super(props);
      this.state = { item: [] };
    
    }
  componentDidMount() {
    axios.get("/api/" + this.props.params.id).then(response => {
      this.setState({ item: response.data });
      // $(".skeleton-loading").hide();
      $(".product-item").fadeIn();
      console.log(this.state.item);
    });
  }
  render() {
    let images = [
      {
        original: this.state.item.picture
      },
      {
          original: "https://media.caranddriver.com/images/media/331369/m4-more-2015-bmw-m4-pricing-hits-the-internet-photo-583889-s-450x274.jpg"
      }
    ]
    /*
    this.state.item.forEach(function(element)
    {
       images.push({original: element}); 
    });
    */
    var hidden = {display: "none"}
    var style1 = {paddingLeft: "40px", paddingRight: "40px", paddingTop: "15px", display: "none"}
    var style2 = {backgroundColor: "rgba(60, 60, 60, .8)", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", borderRadius: "0px"}
    return (
  <div className="col-md-12 col-sm-12 col-xs-12 product-item" style={style1}>
   <div className="col-md-12 col-sm-12 col-xs-12" style={style2}>
      <div className="dashboard_graph">
         <div className="row x_title">
            <div className="col-md-6 product-item" style={hidden}>
               <h3 style={{color: "white"}}>{ this.state.item.name }<small></small></h3>
            </div>
            
            
            <div className="col-md-6"></div>
         </div>
         <div className="col-md-6 col-sm-6 col-xs-12" id="left-side">
           
              <div className="container-fluid">
                 <div className="row">
                     {/* <img src={ this.state.item.picture } className="img-responsive" /> */}
                     <ImageGallery items={images}  thumbnailPosition={"right"} showPlayButton={false} showThumbnails={false}/>
                 </div>
              </div>
              <div className="row text-center">
                <div className="col-md-12 product-item" style={hidden} >
                  {/* <h1>{ this.state.item.name }</h1> */}
                  <p>
                    { this.state.item.desc }
                  </p>
            
                
                  
            
                </div>
                
              </div>

         </div>
         <div className="col-md-6 col-sm-6 col-xs-12 bg-white" id="right-side">
            <div className="x_title">
               <div className="clearfix"></div>
               
            </div>
         </div>
      </div>
   </div>
</div>
    );
  }
}
