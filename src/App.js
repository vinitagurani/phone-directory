// import React, {Component} from 'react';
import Header from "./Header";
import "./App.css"

function App() {
  // let x = 1;
  // let y = 2;
  let subscribers = [
    {
      id: 1,
      name: 'Vinita',
      phone: 888888888
    },
    {
      id: 2,
      name: 'Shilpa',
      phone: 777777777
    }
  ]
  return (
    <div> {/*one parent element*/}
      <Header/>
      <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {subscribers.map(sub => {
            return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
              </div>
            
          })}
      </div>
    </div>
  );
}

export default App;
