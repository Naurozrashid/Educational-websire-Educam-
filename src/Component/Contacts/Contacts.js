import React from 'react';
import './Contacts.css'
import { Link } from 'react-router-dom';

const Contacts = () => {
    return (
        <div>
             <div className="cover">
            <h1 className="padding">Contacts</h1>
            </div>
            <div className="container mt-5">
            <div className="mt-5 row justify-content-evenly">
            <div className="d-flex col-md-3 justify-content-around">
              <div>
              <i className="fas fa-map-marker-alt icon-style-about"></i>
              <h2>Location</h2>
              <h4>12 Dev Pahar, Chittagong,</h4>
              <h4>4300</h4>
              </div>
              <span className="divider-about mb-5"></span>
            </div>
            <div className="d-flex col-md-3 justify-content-around ">
              <div>
              <i className="fas fa-phone-square-alt icon-style-about"></i>
              <h2>Phones</h2>
              <h4>01724382951</h4>
              <h4>01760103734</h4>
              </div>
              <span className="divider-about mb-5"></span>
            </div>
            
            <div className="d-flex col-md-3 justify-content-around">
              <div>
              <i className="fas fa-envelope icon-style-about"></i>
              <h2>Email</h2>
              <h4>naurozrashid6@gmail.com</h4>
              <h4>sale@like-themes.com</h4>
              </div>
              <span className="divider-about mb-5"></span>
            </div>
            <div className="d-flex col-md-3 justify-content-around">
              <div>
              <i class="fas fa-clock icon-style-about "></i>
              <h2>Working Hours</h2>
              <h4>Wednesday - Sunday</h4>
              <h4>7:00 AM - 5:00 PM</h4>
              </div>
              <span className="divider-about mb-5"></span>
            </div>
        </div>
        <div className="border border-white-5 bg-cus text-center-1 mt-5">
            <h1>Send Message</h1>
            <p><h3>Fill out this form and our specialists will contact you shortly for detailed consultation.</h3></p>
            <div className="form-floating w-50 pb-4 container">
                  <input type="text" className="form-control" id="floatingText" placeholder="Your Name"/>
            <label for="floatingText">Your Name</label>
              </div>
            <div className="form-floating mb-3 w-50 text-center-1 pb-4 container">
          <input  type="email" className="form-control text-center-1" id="floatingInput" placeholder="name@example.com"/>
               <label for="floatingInput">Email Address</label>
           </div>
            <div className="form-floating w-50 pb-4 container">
          <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
          <label for="floatingTextarea">Comments</label>
             </div>
             <Link to="/home">
            <button  className="fs-6 fw-bold btn-regular mb-4">Submit</button>
        </Link>
        </div>
       </div>
        </div>
    );
};

export default Contacts;