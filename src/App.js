import React, { Component } from 'react'
import Header from './Header';
import './App.css'

class App extends Component{

  render(){
    var subscribers = [
      {
        id : 1,
        name: 'Srithi',
        phone:'9989999999'
      },
      {
        id : 2,
        name: 'Srithi',
        phone:'00000000'
      },
    ]
    return (

      
      // <div>
      // <h1>UpGrad</h1>
      // <p>We are your F1 button for education!</p>,
      // document.getElementById("root")
      // </div>
      <div>
        {/* <div className='header'>
       Phone Directory
      </div> */}
        <Header />
        <div className="component-body-container">
            <button className="custom-btn add-btn">Add</button>
  
            <div className="grid-container heading-container">
              <span className="grid-item name-heading">Name</span>
              <span className="grid-item phone-heading">Phone</span>
            </div>          

            {
              subscribers.map(sub =>{
                return  <div key = {sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
              </div>
              })
            }
        </div>
  
      </div>
    );
  }
  
};

export default App;
