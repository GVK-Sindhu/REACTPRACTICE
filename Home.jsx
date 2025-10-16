import React from "react";
import { Link } from "react-router-dom";
function Home(){
    return (
       
        <div className="homeparent">
             <h1 className="homeheader">Home</h1>
             <div className="homelinks">
                <Link className= "link" to="/form">Add Data</Link>
                <Link className= "link" to="/info">View Data</Link>
            </div>
        </div>
    )
}

export default Home;