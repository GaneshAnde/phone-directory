import React, { Component} from 'react'
import Header from './Header';

function App() {
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
    <Header/>
    <button>Add</button>
    <div>
      <span>Name</span><br></br>
      <span>Phone</span>

    </div>
    </div>
  );
}

export default App;
