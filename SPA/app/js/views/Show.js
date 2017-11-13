import React, { Component } from 'react';

export default class Show extends Component {
  render() {
    var style1 = {paddingLeft: "40px", paddingRight: "40px", paddingTop: "15px"}
    var style2 = {backgroundColor: "rgba(60, 60, 60, .8)", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", borderRadius: "0px"}
    return (
<div className="col-md-12 col-sm-12 col-xs-12" style={style1}>
   <div className="col-md-12 col-sm-12 col-xs-12" style={style2}>
      <div className="dashboard_graph">
         <div className="row x_title">
            <div className="col-md-6">
               <h3 style={{color: "white"}}>Most Recent Result<small></small></h3>
            </div>
            <div classname="col-md-6"></div>
         </div>
         <div className="col-md-6 col-sm-6 col-xs-12" id="left-side">
           
              <div className="container-fluid">
                 <div className="row">
                    {/* <img src="<%= @product.picture %>" class="img-responsive" /> */}
                 </div>
              </div>
              <div className="row text-center">
                <div className="col-md-12">
                  <h1>Name</h1>
                  <p>
                    Desc
                  </p>
            
                
                  <hr />
                  
            
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
