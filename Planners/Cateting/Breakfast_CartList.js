import React, { useState, useEffect } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


// ************************************************  BREAKFAST  CARTPAGE LIST  ********************************************

const Breakfast_CartList = ({ cart, handleShow }) => {
    const [CART, SETCART] = useState([])
    useEffect(() => {
        SETCART(cart)
    }, [cart])
    
    const [inputText, setInputText] = useState("");
    const handleChange = (e) => {
        setInputText(e.target.value);
    };
    return (
        <>
            <div className="" id="catering_cartlist">

                <div className="row" id="input">
                    <p className="col-2 my-2"> No of Guest: </p><input type="text" className="col-3 my-2" onChange={handleChange} value={inputText} />
                </div>
                {
                    CART?.map((cartItem, cartIndex) => {
                        return (
                            <>

                                <div className=" my-1 d-flex flex-wrap" id="cartlist_card">
                                    <img className="mx-2" src={cartItem.images} width={100} alt="" />
                                    <p id="name" className="mx-2">{cartItem.name} </p>
                                    <p id="price" className="mx-2">Rs.{cartItem.price} </p>
                                    <p id="quantity">{inputText} </p>
                                    <p id="total"> Rs.{parseInt(cartItem.price) * inputText}</p>

                                </div>
                            </>
                        )
                    })
                }
                <div id="totalprice">
                    <h3>Total</h3>
                    <p> Rs.{CART.map(item => parseInt(item.price) * inputText).reduce((total, value) => parseInt(total) + parseInt(value), 0)} </p>
                </div>
            </div>

        </>

    )
}

export default Breakfast_CartList;
// ************************************************  LUNCH  CARTPAGE LIST  ********************************************

export const Lunch_CartList = ({ cart }) => {
    const [CART, SETCART] = useState([])
    useEffect(() => {
        SETCART(cart)
    }, [cart])

    const [inputText, setInputText] = useState("");
    const handleChange = (e) => {
        setInputText(e.target.value);
    };
    return (
        <>
            <div id="catering_cartlist">
                <div className="row" id="input">
                    <p className="col-2 my-2"> No of Guest: </p><input type="text" className="col-3 my-2" onChange={handleChange} value={inputText} />
                </div>
                {
                    CART?.map((cartItem, cartIndex) => {
                        return (
                            <>
                                <div className=" my-1 d-flex flex-wrap" id="cartlist_card">
                                    <img className="mx-2" src={cartItem.images} width={100} alt="" />
                                    <p id="name" className="mx-2">{cartItem.name} </p>
                                    <p id="price" className="mx-2">Rs.{cartItem.price} </p>
                                    <p id="quantity">{inputText} </p>
                                    <p id="total"> Rs.{parseInt(cartItem.price) * inputText}</p>
                                </div>
                            </>
                        )
                    })
                }
                <div id="totalprice">
                    <h3>Guests:  {inputText} </h3>
                    <h3>Total</h3>
                    <p> Rs.{CART.map(item => parseInt(item.price) * inputText).reduce((total, value) => parseInt(total) + parseInt(value), 0)} </p>
                </div>
            </div>

        </>
    )
}
// ************************************************  DINNER  CARTPAGE LIST  ********************************************

export const Dinner_CartList = ({ cart }) => {
    const [CART, SETCART] = useState([])
    useEffect(() => {
        SETCART(cart)
    }, [cart])

    
    const [inputText, setInputText] = useState("");
    const handleChange = (e) => {
        setInputText(e.target.value);
    };
    return (
        <>
            <div className="" id="catering_cartlist">

                <div className="row" id="input">
                    <p className="col-2 my-2"> No of Guest: </p><input type="text" className="col-3 my-2" onChange={handleChange} value={inputText} />
                </div>
                {

                    CART?.map((cartItem, cartIndex) => {
                        return (
                            <>

                                <div className=" my-1 d-flex flex-wrap" id="cartlist_card">
                                    <img className="mx-2" src={cartItem.images} width={100} alt="" />
                                    <p id="name" className="mx-2">{cartItem.name} </p>
                                    <p id="price" className="mx-2">Rs.{cartItem.price} </p>
                                    <p id="quantity">{inputText} </p>
                                    <p id="total"> Rs.{parseInt(cartItem.price) * inputText}</p>
                                </div>
                            </>
                        )
                    })
                }
                <div id="totalprice">
                    <h3>Total</h3>
                    <p> Rs.{CART.map(item => parseInt(item.price) * inputText).reduce((total, value) => parseInt(total) + parseInt(value), 0)} </p>
                </div>
            </div>

        </>
    )
}

// ************************************************ CATERING  CARTPAGE NAVBAR  ********************************************
export const Catering_CartPage_NavBar = (props) => {

    return (
        <>
            <nav className="navbar Planner_scroll navbar-expand-sm fixed-top" id="boutique_Productpage_navbar">
                <div className="container-fluid">
                    <a className="navbar-brand ml-5" href="#">BooKing</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end mx-5" id="navbarNavDropdown">
                        <ul className="navbar-nav">

                            <li className="nav-item my-1 mx-2">
                                {/* <Link to="/planpackage/boutique"> */}
                                <button className="btn-back" onClick={() => props.handleShow(false)}>Show Menu</button>
                                {/* </Link> */}
                            </li>

                            <li className="nav-item my-1">
                                {/* <Link to="/Cart"> */}
                                <button onClick={() => props.handleShow(true)} className="btn-cart">Cart <ShoppingCartIcon /> <sup>{props.count}</sup>   </button>
                                {/* </Link> */}
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}

