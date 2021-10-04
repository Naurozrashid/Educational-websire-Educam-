import React from 'react';
import { Link } from 'react-router-dom';
import './Allcourses.css'

const Allcourses = (props) => {
    const {course_name,img,instructor,price,level,total_lacture,rating,description,course_time}=props.allcourses;
    return (
        <div className="py-5">
            
            <div className="row">
                <div className="col-lg-4"><img style={{ borderRadius:'30px'}} src={img} alt="" /></div>
                <div className="col-lg-8 text-start">
                    <h3><i class="fas fa-user icon-style"></i> {instructor}</h3>
                    <h1>{course_name}</h1>
                    <div className="d-flex">
                        <h4 className="pe-4"><i class="fas fa-clock icon-style-2"></i> {course_time}</h4>
                        <h4 className="pe-4"><i class="fas fa-layer-group icon-style-2"></i> {level}</h4>
                        <h4 className="pe-4"><i class="fas fa-copy icon-style-2"></i> {total_lacture} Lessons</h4>
                        <h4 className="pe-4"><i className="fas fa-star icon-style-2"></i>{rating}</h4>
                        
                    </div>
                    <h1>Price:{price}</h1>
                    <p><h3 className="text-color-1">{description}</h3></p>
                    <Link to="/courses">
              <button  className="fs-6 fw-bold btn-regular">Enroll <i class="fas fa-arrow-right"></i></button>
        </Link>
                </div>
            </div>
        </div>
    );
};

export default Allcourses;