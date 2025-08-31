import React from "react";
import './App.css';
function App() {
    // fuction to run when button is clicked
    const handleClick = () => {
        alert(" Hello my button works!");
    };
    return(
        <div>
            <h1> hackathon health project</h1>
            <p>Welcome to the Hackathon Health Project!</p>
            <button> onClick={handleClick} click Me</button>
        </div>
    );
}
export default App;