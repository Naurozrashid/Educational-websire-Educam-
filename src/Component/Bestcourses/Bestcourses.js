import React from 'react';
import { Link } from 'react-router-dom';

const bestCourses = (props) => {
    
    const {course_name,img,instructor,price,level,total_lacture,rating,description}=props.bCourses;
    return (
        <div className="col">
            
    <div style={{borderRadius:'20px'}} className="card h-100">
      <img style={{ borderRadius:'30px', height: '25rem'}} src={img} className="card-img-top img-style p-3" alt="..."/>
      <div className="card-body">
        <h2 className="card-title">{course_name}</h2>
        <h5>by {instructor}</h5>
        <h3>Price: {price}</h3>
        <h3>Level :{level}</h3>
        <h3>Total Lecture: {total_lacture}</h3>
        <h3>Rating:<i className="fas fa-star" style={{color:'orangered'}}></i>{rating}</h3>
        <p className="card-text fs-3">{description}</p>
        <Link to="/courses">
            <button  className="fs-6 fw-bold btn-regular animate__animated animate__flipInX">See More <i className="fas fa-arrow-right"></i></button>
        </Link>
      </div>
    </div>
  
        </div>
    );
};

export default bestCourses;