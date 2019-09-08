import React from 'react';
import './Home.css';
import SiteCarousel from '../SiteCarousel';
import VehicleBrowser from '../VehicleBrowser';

class Home extends React.Component{

   
render(){
    // if data is there then pull data up
   if(this.props.vehicleData){
    return (
        <div>
            <SiteCarousel vehicleData={this.props.vehicleData} ></SiteCarousel>
            <VehicleBrowser vehicleData={this.props.vehicleData}></VehicleBrowser>
        </div>
    );
   } else{
       return null;
   }
}

}

export default Home;