import logo from "./logo.svg";
import "./App.css";

function App() {
  const person = {
    name: "Nishat Hasan Muktar",
    profession: "Now,I'm learnng about React Core Concept",
  };

  var style = {
    color: "red",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "10px 10px 10px black",
  };

  // --For Componet--//
  var cricketer = ['Shakib Al Hasan','Tamim Iqbal','Mashrafi','Mushfiqur Rahman','Mahmudullah']
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: "red" }}>
        
        {/* <h1>Cricketer List:</h1> */}
        <Person name={cricketer[0]} status='Alrounder'></Person>
        <Person name={cricketer[1]} status='Batsman'></Person>
        <Person name={cricketer[2]} status='Bowler'></Person>
        <Person name={cricketer[3]} status='Wicket Keeper'></Person>
        <Person name={cricketer[4]} status='Allrounder'></Person>

      </header>
    </div>
  );
}

// --Declare or create a component using function--//

function Person(props){

  // --Creating a object for CSS style --//
  var style={
    border:'2px solid yellow',
    margin:'20px',
    padding:'10px'
  }
  
  return(
<div style={style}>
  <h1>Name : {props.name}</h1>
  <h2>Status : {props.status}</h2>
</div>
  );
}

export default App;
