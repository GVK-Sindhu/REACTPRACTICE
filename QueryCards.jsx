import CountUp from "react-countup";
import reg from './assets/registration.png';
import part from './assets/participants.png';
import final from './assets/finalists.png';
import sub from './assets/submissions.png';
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';


function QueryCards() {
    window.onload = function() {
        notify();
    }
     const notify = () => toast.success("successfully! logged in!");
    return (
        <>
        <div className="task-header">
            <h3 className="heading">QueryThon Admin Dashboard</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="white" viewBox="0 0 24 24" border="1px solid white" >

  <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
</svg>
        </div>
                    <ToastContainer />
        
            <div className="Queryparent">
                <div className="Queryinfo">
                    <img src={reg} alt="Registrations" className="iconimage"/>
                    <div className="countup"> <CountUp start={1} end={800} duration={5.75} suffix="+ Registrations" ></CountUp></div>
                </div>

                <div className="Queryinfo">
                    <img src={part} alt="Participants" className="iconimage"/>
                    <div className="countup"> <CountUp start={1} end={550} duration={5.75} suffix="+Participants" ></CountUp></div>
                </div>
                <div className="Queryinfo">
                    <img src={final} alt="Finalists" className="iconimage"/>
                    <div className="countup"> <CountUp start={1} end={50} duration={5.75} suffix="+ Finalists" ></CountUp></div>
                </div>
                <div className="Queryinfo">
                    <img src={sub} alt="Submissions" className="iconimage"/>
                    <div className="countup"> <CountUp start={1} end={2000} duration={5.75} suffix="+Submissions" ></CountUp></div>
                </div>

            </div>
        </>
    );
}
export default QueryCards;