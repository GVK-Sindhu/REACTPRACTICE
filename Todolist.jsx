import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
function Todolist(){
    const [userQuery,SetuserQuery]=useState([""]);
    const [listarr,Setlistarr]=useState([]);
    const UserQuery=(event)=>{
    SetuserQuery(event.target.value);
    }
    const submittedtask=(event)=>{
    if(userQuery==""){
        alert("enter valid task");
    }
    else{
    Setlistarr([...listarr, userQuery]);
    }
    }
    const deletetask = (deleteindex) => {
    const arr = listarr.filter((ele, index) => index != deleteindex);
    Setlistarr(arr);
    }
    const edittask=(changeindex)=>{
    const arr=listarr.filter((ele,index)!=index==changeindex)
    }
    return(
        <>
         <h1>Todolist.jsx</h1>
         <br/>
            <Link to="/form">Contact</Link>
            <br/>
            <Link to="/filters">Help</Link>
            <br/>
            <Link to="/todo">Task</Link>
            <br/>
            <div className="taskparent">
                <input type="text" onChange={(event) => { UserQuery(event) } } placeholder="add task" />
                <button onClick={(event) => { submittedtask(event) } }>Submit</button>
                <div className="outline">
                    {listarr.map((ele) => {
                    return <div className="outline">
                        <div className="item">
                        <ol>
                            <li className="litsitems"><input type="checkbox" />{ele}
                            <button onClick={() => { edittask(listarr.indexOf(ele)) } }>Edit</button> <button onClick={() => { deletetask(listarr.indexOf(ele)) } }>Delete</button></li>
                        </ol>
                        </div>
                    </div>
                    })}

                </div>
            </div>
        </>
    )
};
export default Todolist;