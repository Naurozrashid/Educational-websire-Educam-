import React from 'react';
import { Link } from 'react-router-dom';
import './Allcourses.css'

const Allcourses = (props) => {
    const {course_name,img,instructor,price,level,total_lacture,rating,description,course_time}=props.allcourses;
    return (
        <div className="py-5">
            
            <div className="row">
                <div className="col-lg-6 col-12"><img style={{ borderRadius:'30px'}} className="img-fluid" src={img} alt="" /></div>
                <div className="col-lg-6 col-12 text-start">
                    <h3><i className="fas fa-user icon-style"></i> {instructor}</h3>
                    <h1>{course_name}</h1>
                    <div className="d-flex py-3">
                        <h4 className="pe-4"><i className="fas fa-clock icon-style-2"></i> {course_time}</h4>
                        <h4 className="pe-4"><i className="fas fa-layer-group icon-style-2"></i> {level}</h4>
                        <h4 className="pe-4"><i className="fas fa-copy icon-style-2"></i> {total_lacture} Lessons</h4>
                        <h4 className="pe-4"><i className="fas fa-star icon-style-2"></i>{rating}</h4>
                        
                    </div>
                    <h1>Price:{price}</h1>
                    <p className="text-color-1 fSize py-3">{description}</p>
                    <Link to="/courses">
              <button  className="fs-6 fw-bold btn-regular animate__animated animate__flipInX">Enroll <i className="fas fa-arrow-right"></i></button>
        </Link>
                </div>
            </div>
        </div>
    );
};

export default Allcourses;