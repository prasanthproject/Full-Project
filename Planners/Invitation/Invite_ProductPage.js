import React, { useState } from 'react'
import { invitation_card } from './Invitation_data'
import { Link, useNavigate, useParams } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Invite_ProductPage = () => {

  const params = useParams();
  const item = invitation_card.find((element) => element.id === parseInt(params.id));

  return (
    <>
      <Invite_ProductPage_NavBar />
      <div className="container" id="invite_product_page">
        <div className="row">
          <div className="col-lg-6">
            <div>
              <img src={item.images} className="py-2 rounded shadow-sm" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="category">{item.categories} </h3>
            <h3 className="name"> {item.name} </h3>
            <h5 className="price my-3">&#8377;{item.price}</h5>

            <div className="mb-5" id="language">
              <div className="row">
                <p className="">Language:</p><br />
                <div className="d-flex flex-row col-3 card">
                  <input type="radio" name="language" id="tamil" value="tamil" />
                  <label htmlFor="tamil">TAMIL</label>
                </div>
                <div className="d-flex flex-row col-3 card">
                  <input type="radio" name="language" id="english" value="english" />
                  <label htmlFor="english"> ENGLISH</label>
                </div>
              </div>
            </div>
            <label for="myfile">Select a file:</label>
            <input type="file" id="myfile" name="myfile"/><br/>
            <div className="row justify-content-evenly">
              <button className="btn col-5  btn-success mt-5 px-5 rounded-0">Buy Now </button>

              {/* <button className="btn col-5  btn-danger rounded-0" onClick={()=>addtoCart(item)}>Add to Cart </button> */}
            </div>
          </div>
        </div>
      </div>
  
    </>
  )
}
export default Invite_ProductPage;


export const Invite_ProductPage_NavBar =  (props) => {
  const navigate =useNavigate();

  return (
    <>
      <nav className="navbar Planner_scroll navbar-expand-sm fixed-top" id="Invite_ProductPage_navbar">
        <div className="container-fluid">
          <a className="navbar-brand  ml-5" href="#" onClick={()=>props.handleShow(false)}>BooKing</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end mx-5" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item my-1 mx-2">
                <Link to="/planpackage/invitation">
                  <button className="btn-back">Back</button>
                </Link>
              </li>
              <li className="nav-item my-1">
                {/* <Link to="/planpackage/invitation/cartlist"> */}
                  <button onClick={()=>props.handleShow(true)} className="btn-cart">Cart <ShoppingCartIcon /><sup>{props.count}</sup> </button>
                {/* </Link> */}
              </li>
            

            </ul>
          </div>
        </div>
      </nav>
    </>

  )
}
