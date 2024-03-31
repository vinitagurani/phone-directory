// import React, {Component} from 'react';
import Header from "./Header";

function App() {
  // let x = 1;
  // let y = 2;
  return (
    <div> {/*one parent element*/}
      <Header/>
      <button> Add </button>
      <div>
        <span>Name</span> <br /> {/*difference forward slash*/}
        <span>Phone</span>
      </div>
      {/* <label htmlFor = "name" >Name: </label>
      <input id ="name" type="text" placeholder="Type here" defaultValue= {x+y}></input> */}
    </div>
  );
}

export default App;
