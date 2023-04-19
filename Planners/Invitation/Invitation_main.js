import React, { useState, useEffect } from 'react';
import './Invitation.css';
import IMAGES from '../../Imges/Image'
import { invitation_card } from './Invitation_data'
import { useNavigate } from 'react-router-dom';

const Invitation = ({ addtoCart }) => {

  const navigate = useNavigate();

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(invitation_card);

  const [noOfinvitations, setOfInvitation] = useState(6);
  const slice = filteredItems.slice(0, noOfinvitations);
  const loadmore = () => {
    setOfInvitation(noOfinvitations + 3)
  }

  let invitation_type = ["Formal", "Photocard", "GIF_Invitation", "Caricature", "Modern", "Traditional"]
  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = invitation_card.filter((item) => item.categories === selectedCategory);
        return temp;
      });

      setFilteredItems(tempItems.flat());
    }
    else {
      setFilteredItems([...invitation_card]);
    }
  };

  const [navbarToggle, setnavbarToggle] = useState(false);
  const NavbarchangeBg2 = () => {
    if (window.scrollY >= 920) {
      setnavbarToggle(true);
    }
    else {
      setnavbarToggle(false);
    }
  };
  window.addEventListener("scroll", NavbarchangeBg2);

  return (

    <>
      <div id="carouselExampleIndicators6" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={IMAGES.invitation1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={IMAGES.invitation2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={IMAGES.invitation3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <div className="overlay1">

        </div>
        <div className="content1">
          <h6> Top Invitation card Collections  {' & '} Digital Invitation in here... </h6>
          <button id="btn"> See More</button>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicator6" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      <div className="" id="Invitation_plan">
        <div className="row" id="invitation_categroies">
          <div className="col-xl-2" id="categroies_head">
            <p>Categroies</p>
          </div>
          <div className="col-xl-10 col-sm-12 mt-3" id="invite_type">
            {invitation_type.map((categrory, idx) =>
            (
              <button id="type_btn" onClick={() => handleFilterButtonClick(categrory)} className={`button ${selectedFilters?.includes(categrory) ? "active1" : ""}`}
                key={`filters-${idx}`}> {categrory}  </button>
            ))}
          </div>
        </div>
        <div>
          {/* {navbarToggle ? <Invite_ProductPage_NavBar count={cart.length} handleShow={handleShow} /> : <Planner_navbar/> } */}
        </div>
        {/* <Invite_ProductPage_NavBar count={cart.length}/> */}
        <div className="row">
          <div className="col-xl-2 col-12" id="invitation_filter">
            {/* <div id="pricefilter" className="col-sm-4 col-md-12">
              <h5 id="title">Price</h5>
              <ul className="" id="price">
                <li className=""><input className="form-check-input" type="checkbox" value="" aria-label="..." /> below <span>&#8377;</span>20 </li>
                <li className=""><input className="form-check-input" type="checkbox" value="" aria-label="..." /> <span>&#8377;</span>20 to <span>&#8377;</span>30  </li>
                <li className=""><input className="form-check-input" type="checkbox" value="" aria-label="..." /> <span>&#8377;</span>30 to <span>&#8377;</span>50 </li>
                <li className=""><input className="form-check-input" type="checkbox" value="" aria-label="..." /> <span>&#8377;</span>50 to <span>&#8377;</span>100 </li>
                <li className=""><input className="form-check-input" type="checkbox" value="" aria-label="..." /> Above <span>&#8377;</span>100</li>
              </ul>
              <hr />
            </div> */}
          </div>

          <div className="col-xl-10 col-md-12 col-12" id="body">
            <div className="row" id="invitation_card">
              {slice.map((item) => (
                <div key={item.id} className="col-xl-4 col-md-6 col-12" id="container">
                  <div className="cursor-pointer" role="button" id="Invitation_Card">
                    <div className="" id="imgSx" onClick={() => navigate(`/planpackage/invite/productpage/${item.id}`)}>
                      <img src={item.images} width="260px" height="260px" alt={item.categories} />
                    </div>
                    <div id="content">
                      <p id="title"> {item.name} </p>
                      <p className="mt-4" id="price"> <span className=" fs-6 text-muted">each </span> <span>&#8377;</span>{item.price} </p>
                      {/* <button id="btn" onClick={()=>navigate(`/planpackage/invite/productpage/${item.id}`)}>Book Now </button> */}
                      <button className="btn col-10  btn-danger rounded-0" onClick={() => addtoCart(item)}>Add to Cart </button>

                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* {
  showcart?
  <Invitation_CartList cart={cart} ></Invitation_CartList> : <h1> </h1>
} */}

            <div className="text-center">
              <button className="col-6 my-5" id="invitation_Loadmore" onClick={() => loadmore()}> Load More...</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default Invitation;
