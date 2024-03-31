import React, { Component } from 'react';
import Header from "./Header";
import "./ShowSubscriber.css";
import ReactDOM from 'react-dom/client';

class ShowSubscriber extends Component {

  render() {

    // let subscribers = [
    //   {
    //     id: 1,
    //     name: 'Vinita',
    //     phone: 888888888
    //   },
    //   {
    //     id: 2,
    //     name: 'Shilpa',
    //     phone: 777777777
    //   }
    // ]

    return (
      <div> {/*one parent element*/}
        <Header heading="Phone Directory" ></Header>
        {/* passing props to render the header dynamically*/}
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {this.props.subscribersList.map(sub => {
            return <div key={sub.id} className="grid-container">
              <span className="grid-item">{sub.name}</span>
              <span className="grid-item">{sub.phone}</span>
              <span className="grid-item action-btn-container">
                <button className="custom-btn delete-btn">Delete</button>
              </span>
            </div>

          })}

        </div>
      </div>
    )
  }
}

export default ShowSubscriber;
