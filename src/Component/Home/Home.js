import React, { useState,useEffect } from 'react';
import Bestcourses from '../Bestcourses/Bestcourses';
import './Home.css'

const Home = () => {
    const [pcourses, setPcourses] = useState([]);
    useEffect(() => {
        fetch('./fake.json')
            .then(res => res.json())
            .then(data => setPcourses(data));
    }, []);
    return (
        <div>
            <div className="cover">
            <h1 className="padding">Home</h1>
            </div>
            <div className="mt-5">
                <h4 className="text-color">Start Now</h4>
            <h1 className="hedding-style">Popular Trainings</h1>
            <span className="divider mb-5"></span>
            <div className="container-fluid p-5">
            <div className="row row-cols-1 row-cols-md-2 g-4">
            {
              
              pcourses.slice(0,4).map(bCourses => <Bestcourses
              key={bCourses.key}
              bCourses={bCourses}
            
              ></Bestcourses>)
            }
            </div>
            </div>
            
           
          
            </div>
            
            
        </div>
    );
};

export default Home;