import React from 'react';
import img1 from '../../extra1.jpg'
import img2 from '../../extra-2.jpg'
import img3 from '../../extra-3.jpg'
import './Tech.css'
import { Link } from 'react-router-dom';

const Tech = () => {
    return (
        <div>
             <div className="cover">
            <h1 className="padding animate__animated animate__backInDown">Teach On Educam</h1>
            </div>
            <div>
                <h1 className="fw-bold my-5">How to Begin</h1>
                <span className="divider mb-5"></span>
            </div>
        <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-3 g-4">
         <div className="col">
    <div className="card h-100">
    <img style={{ borderRadius:'30px', height: '25rem'}} src={img1} className="card-img-top img-style p-3" alt="..."/>
      <div className="card-body">
        <h1 className="card-title">Plan Your Curriculum</h1>
        <p style={{fontSize:'32px'}} className="card-text">You start with your passion and knowledge. Then choose a promising topic with the help of our Marketplace Insights tool.</p>
        <p style={{fontSize:'32px'}} className="card-text">The way that you teach — what you bring to it — is up to you.</p>
        
      </div>
    </div>
         </div>
         <div className="col">
    <div className="card h-100">
    <img style={{ borderRadius:'30px', height: '25rem'}} src={img2} className="card-img-top img-style p-3" alt="..."/>
      <div className="card-body">
        <h1 className="card-title">Record Your Video</h1>
        <p style={{fontSize:'32px'}} className="card-text">Use basic tools like a smartphone or a DSLR camera. Add a good microphone and you’re ready to start.</p>
        <p style={{fontSize:'32px'}} className="card-text">If you don’t like being on camera, just capture your screen. Either way, we recommend two hours or more of video for a paid course.</p>
        
      </div>
    </div>
         </div>
         <div className="col">
    <div className="card h-100">
    <img style={{ borderRadius:'30px', height: '25rem'}} src={img3} className="card-img-top img-style p-3" alt="..."/>
      <div className="card-body">
        <h1 className="card-title">Lanuch Your Video</h1>
        <p style={{fontSize:'32px'}} className="card-text">Gather your first ratings and reviews by promoting your course through social media and your professional networks.</p>
        <p style={{fontSize:'32px'}} className="card-text">Your course will be discoverable in our marketplace where you earn revenue from each paid enrollment.</p>
      </div>
    </div>
         </div>
          
        </div>
        </div>
        
        

        
        <div className="cover-2 my-5">
            <h1 className="padding-2">Become an instructor today</h1>
            <h3 style={{fontSize:'32px'}} className="text-white">Join one of the world’s largest online learning marketplaces.</h3>
            <Link to="/tech">
            <button style={{fontSize:'32px',height: '65px'}}  className=" btn-regular my-4 animate__animated animate__flipInX">Join Now <i className="fas fa-arrow-right"></i></button>
        </Link>
            </div>
        </div>
    );
};

export default Tech;