import React from "react";
import { Link } from "react-router-dom";

const FormComponent = () => {
            let firstname="";
            let lastname="";
            let email="";
            let dateofbirth="";
            // let gender="";
            // let courses="";
            const getfirst = (event)  => {
                firstname=event.target.value;
            }
            const getlast = (event)  => {
                lastname=event.target.value;
            }
            const getemail = (event)  => {
                email=event.target.value;
            }
            const getdate=(event)=>{
                dateofbirth=event.target.value;
            }
             const printdata = () => {
                console.log("firstname:",firstname);
                console.log("lastname:",lastname);
                console.log("email:" , email);
                console.log("date:",dateofbirth);
            }
            
    return (
        <>
            <h1>Form Component.jsx</h1>
            <Link to="/form">Contact</Link>
            <br/>
            <Link to="/filters">Help</Link>
            <br/>
            <Link to="/todo">Task</Link>
            <br/>
            <label>Enter First Name</label>
            <input type="text" placehoder="enter name" onChange={(event)=>getfirst(event)} />
            <br/>
            <label>Enter Last Name</label>
            <input type="text" placehoder="enter name" onChange={(event)=>getlast(event)}/>
            <br/>
            <label>Enter Email Address</label>
            <input type="email" placehoder="enter email" onChange={(event)=>getemail(event)}/>
            <br/>
            <label>enter date of birth</label>
            <input type="date" onChange={(event)=>getdate(event)}/>
            <br/>
            <label>choose gender</label>
            <input type="radio" name="gender" />
            <label>Female</label>
            <input type="radio" name="Gender"/>
            <label>Male</label>
            <input type="radio" name="Gender"/>
            <label>other</label>
            <br/>
            <label>Choose Courses</label>
            <input type="checkbox" placeholder="c"/>
            <input type="checkbox"/>
            <label>c</label>
            <input type="checkbox"/>
            <label>c++</label>
            <input type="checkbox"/>
            <label>java</label>
            <input type="checkbox"/>
            <label>python</label>
            <br/>
            <button onClick={printdata}>Submit</button>
        </>
    );
}

export default FormComponent;
