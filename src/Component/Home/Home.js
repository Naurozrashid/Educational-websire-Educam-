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
            <div>
                <h1 className="mt-5">Online Traning Center for <span style={{color:'orangered'}}>Adults and Children</span>. The fear of the</h1>
                <h1>environment, the arrows of the EU, the warm need, the pull of the bed. Perfect for the free.</h1>
                <div className="row g-2  align-items-center mt-5 justify-content-center">
                    <div className="col-lg-3 align-items-center con ">
                    <i class="fas fa-laptop size pb-4"></i>
                    <h1>Individuality</h1>
                    </div>
                    <div className="con col-lg-3">
                    <i class="fas fa-book size pb-4"></i>
                    <h1>Effective Programs</h1>
                    </div>
                    <div className="con col-lg-3">
                    <i class="fas fa-headphones size pb-4"></i>
                    <h1>Online Training Care and Support</h1>
                    </div>
                    <div className="con col-lg-3">
                    <i class="fas fa-comments size pb-4"></i>
                    <h1>Care and Support</h1>
                    </div>

                </div>
            </div>
            </div>
            
           
          
            </div>
            
            
        </div>
    );
};

export default Home;