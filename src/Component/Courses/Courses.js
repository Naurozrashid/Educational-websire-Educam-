import React, { useEffect, useState } from 'react';
import Allcourses from '../Allcourses/Allcourses';

const Courses = () => {
    const [allcourses, setallcourses] = useState([]);
    useEffect(() => {
        fetch('./fake.json')
            .then(res => res.json())
            .then(data => setallcourses(data));
    }, []);
    return (
        <div>
            <div className="cover">
            <h1 className="padding">Courses</h1>
            </div>
           <div className="p-5">
               <h1>All Courses</h1>
                <div className="d-flex justify-content-center pt-4">
                    <div className="input-group mb-3 w-50 ">
        <input type="text" className="form-control" placeholder="Search Courses"  aria-describedby="button-addon2"/>
         <button  type="button" id="button-addon2"><i class="fas fa-search"></i></button>
           </div></div> 
           </div>
        
           <div className="row row-cols-1 row-cols-md-1 g-4">
               {
                  allcourses.map(allcourses => <Allcourses
                  key={allcourses.key}
                  allcourses={allcourses}
                  ></Allcourses>)

               }

          </div>

        </div>

    );
};

export default Courses;