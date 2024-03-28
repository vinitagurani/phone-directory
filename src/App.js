
function App() {
  return (
    <div> {/*one parent element*/}
      <div className="header">
        {/* difference in classname */}
        Phone directory
      </div>
      <button> Add </button>
      <div>
        <span>Name</span> <br /> {/*difference forward slash*/}
        <span>Phone</span>
      </div>
      <label htmlFor = "name" >Name: </label>
      <input id ="name" type="text" placeholder="Type here" defaultValue= "Vinita"></input>
    </div>
  );
}

export default App;
