import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
function Filter(){
  const [x,setx]=useState(0);
  useEffect(()=>{
    console.log("on clicking of button executed..");
  },[x]);
  // usestate,useeffect task
  const [CompleteData,SetData]=useState([
    {
      "name":"sindhu",
      "rollno":"95"

    },{
      "name":"geeta",
      "rollno" :"29"
    },
    {
      "name":"alice",
      "rollno":"1"

    },{
      "name":"bob",
      "rollno" :"2"
    },
    {
      "name":"charlie",
      "rollno":"3"

    },{
      "name":"danie",
      "rollno" :"56"
    }
  ])
  const[QueryResult,SetQueryResult]=useState([])
  const [userQuery,SetuserQuery]=useState([""]);
  
  const submithandler=(event)=>{
    SetuserQuery(event.target.value);
    console.log(event.target.value);
  }

  useEffect(() => {
    if(userQuery!=""){
    const filtered = CompleteData.filter( (ele) =>
      ele.name.includes(userQuery) ||
      ele.rollno.includes(userQuery)
    );
      SetQueryResult(filtered);
    }
    else{
      SetQueryResult(CompleteData);
    }
    console.log("user entered",userQuery);
  }, [userQuery]);

  return (
    <>
    <h1>Filter.jsx</h1>
            <Link to="/form">Contact</Link>
            <br/>
            <Link to="/filters">Help</Link>
            <br/>
            <Link to="/todo">Task</Link>
            <br/>
    <input onChange={(event)=>{submithandler(event)}} type="text" placeholder="Search........."/>
    <div className="parent">
      {
        QueryResult.map((ele)=>{
          return <div className="cards">
           <div> name:{ele.name}</div>
           <div> rollno:{ele.rollno}</div>
          </div>
        })
      }
    </div>
    </>
  )
}
export default Filter;