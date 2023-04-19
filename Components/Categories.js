import React from 'react';
import './Homepage.css';
import IMAGES from '../Imges/Image';
import { Link } from 'react-router-dom';

const Categories = () => {

  return (
    <>
      <div className="container my-5" id="Categoriescard">
        <div className="row  justify-content-center text-center" id="categories_title">
          <p className=" col-xl-2 col-md-3 col-6"> Categories</p>
        </div>
        <div className="row" >
          {/* <div className="col-lg-5 col-xs-12">
            <div className="card">
              <img className="card-img-top" src={IMAGES.z1} alt="" />
              <div className="card-body">
                <h3 className="card-title">Thandunane's Package</h3>
                <Link to="/package">
                  <button className="" id="btn">Visit</button>
                </Link>
              </div>
            </div>
          </div> */}

          {/* <div className="col-lg-2 col-xs-12 my-2 align-self-center">
            <h6 className="text-center">(OR)</h6>
          </div> */}

          <div className="col-lg-5 col-sm-12" id="plan_card">
            <div className="card">
              <img className="card-img-top" src={IMAGES.a1} alt="" />
              <div className="card-body">
                <h3 className="card-title">Thandunane's Plans</h3>
                {/* <p className="card-text" id="btn">Thandunane  sepackage is our planners are take to full responsiblity and Memorible of Our Wedding Event </p> */}
                <Link to="/customer_details">
                  <button id="btn">Visit</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;