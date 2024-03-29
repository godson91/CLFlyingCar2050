import React, {Component} from 'react';
import './App.css';
import Axios from 'axios';
import TopNav from './components/TopNav';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DealerLocator from './components/DealerLocator';
import TestFlightForm from './components/TestFlightForm';
import VehicleDetail from './components/VehicleDetail/VehicleDetail';
import BuildAndPrice from './components/BuildAndPrice';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {vehicleData: null};
  }
  componentDidMount(){
    Axios.get("http://localhost:3001/vehicles")
    .then(res => {
      console.log(res.data);
      this.setState({vehicleData: res.data});//stores all data in the state
    })
    .catch(err => console.log(err));
  }
  render() {
    if(this.state.vehicleData){
      return (
        <Router>
            <div className="App">
              <TopNav vehicleData = {this.state.vehicleData}></TopNav>
              <div className="contentAread">
                 <Route exact path='/' render={(props) => <Home {...props} vehicleData={this.state.vehicleData} />} />
                 <Route path = '/find-a-dealer' component = {DealerLocator} />
                 <Route path = '/schedule-test-flight' component = {TestFlightForm} />
                 <Route path='/build-and-price' render={(props)=><BuildAndPrice {...props} vehicleData={this.state.vehicleData} />} />

                 <Route path = '/detail/:selectedVehicle' render={(props) => <VehicleDetail {...props} vehicleData= {this.state.vehicleData} />}/>
              </div>
              <Footer></Footer>
            </div>
         </Router>   
);
    } else {
      return <h4>Loading Data...</h4>;
    } 
    
  }
  
}
  

export default App;
