import React from 'react'
import './Boutique.css';
import { Link, useParams } from 'react-router-dom';
import { Boutique_Products, Shoe_collections, Bride_collections, Groom_collections } from './Boutique_data';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Boutique_ProductPage = () => {
    const params = useParams();
    const item = Boutique_Products.find((element) => parseInt(element.id) === parseInt(params.id));
    return (
        <>
            <CartPage_NavBar />
            <div className="container" id="boutique_product_page">
                <div className="row">
                    <div className="col-lg-6">
                        <div>
                            <img src={item.images} className="py-2 rounded shadow-sm" width="70%" heigth="55vh" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h3 className="category"> {item.categroies} </h3>
                        <h3 className="name"> {item.name} </h3>
                        <h5 className="price my-4">&#8377;{item.price}</h5>
                      
                        <div className="mb-5" id="size">
                            <div className="row">
                                <p className="">Size:</p><br/>
                                <div className="d-flex flex-row col-2 card">
                                    <input type="radio" name="language" id="xl" value="xl" />
                                    <label htmlfor="xl">XL</label>
                                </div>
                                <div className="d-flex flex-row col-2 card">
                                    <input type="radio" name="language" id="xxl" value="xxl" />
                                    <label htmlfor="xxl">XXL</label>
                                </div>
                                <div className="d-flex flex-row col-2 card">
                                    <input type="radio" name="language" id="xxxl" value="xxxl" />
                                    <label htmlfor="xxxl">XXXL</label>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-evenly">
                            <button className="btn col-5  btn-success px-5 rounded-0">Buy Now </button>
                            <button className="btn col-5  btn-danger rounded-0">Add to Cart <ShoppingCartIcon /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Boutique_ProductPage;

//*************************************************     SHOE PRODUCT_PAGE ********************************************************************/ 

export const Boutiques_shoe_ProductPage = () => {
    const params = useParams();
    const item1 = Shoe_collections.find((element) => element.id === parseInt(params.id));
    return (
        <>
            <CartPage_NavBar />
            <div className="container" id="boutique_product_page">
                <div className="row">
                    <div className="col-lg-6">
                        <div>
                            <img src={item1.image} className="py-2 rounded shadow-sm" width="70%" heigth="100%" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h3 className="name"> {item1.name} </h3>
                        <h5 className="price">&#8377;{item1.price}</h5>
                         
                        <div className="mb-5" id="size">
                            <div className="row">
                                <p className="">Size:</p><br/>
                                <div className="d-flex flex-row col-2 card">
                                    <input type="radio" name="language" id="xl" value="8" />
                                    <label htmlfor="xl">8</label>
                                </div>
                                <div className="d-flex flex-row col-2 card">
                                    <input type="radio" name="language" id="xxl" value="9" />
                                    <label htmlfor="xxl">9</label>
                                </div>
                                <div className="d-flex flex-row col-2 card">
                                    <input type="radio" name="language" id="xxxl" value="10" />
                                    <label htmlfor="xxxl">10</label>
                                </div>
                                <div className="d-flex flex-row col-2 card">
                                    <input type="radio" name="language" id="xxxl" value="11" />
                                    <label htmlfor="xxxl">11</label>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-evenly">
                            <button className="btn col-5  btn-success px-5 rounded-0">Buy Now </button>
                            <button className="btn col-5  btn-danger rounded-0">Add to Cart <ShoppingCartIcon /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
//*************************************************     TOP GROOM COLLLECTION PRODUCT_PAGE ********************************************************************/ 

export const Top_Groom_Collection = () => {
    const params = useParams();
    const item1 = Groom_collections.find((element) => element.id === parseInt(params.id));
    return (
        <>
            <CartPage_NavBar />
            <div className="container" id="boutique_product_page">
                <div className="row">
                    <div className="col-lg-6">
                        <div>
                            <img src={item1.image} className="py-2 rounded shadow-sm" width="70%" heigth="55vh" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h3 className="category"> {item1.category} </h3>
                        <h3 className="name"> {item1.name} </h3>
                        <h5 className="price">&#8377;{item1.price}</h5>
                        <div className="row justify-content-evenly">
                            <button className="btn col-5  btn-success px-5 rounded-0">Buy Now </button>
                            <button className="btn col-5  btn-danger rounded-0">Add to Cart <ShoppingCartIcon /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

//*************************************************     TOP BRIDE COLLLECTION PRODUCT_PAGE ********************************************************************/ 
export const Top_Bride_Collection = () => {
    const params = useParams();
    const item1 = Bride_collections.find((element) => element.id === parseInt(params.id));
    return (
        <>
            <CartPage_NavBar />
            <div className="container" id="boutique_product_page">
                <div className="row">
                    <div className="col-lg-6">
                        <div>
                            <img src={item1.image} className="py-2 rounded shadow-sm" width="70%" heigth="55vh" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h3 className="category"> {item1.category} </h3>
                        <h3 className="name"> {item1.name} </h3>
                        <h5 className="price">&#8377;{item1.price}</h5>
                        <div className="row justify-content-evenly">
                            <button className="btn col-5  btn-success px-5 rounded-0">Buy Now </button>
                            <button className="btn col-5  btn-danger rounded-0">Add to Cart <ShoppingCartIcon /> </button>
                        </div>
                    </div>
                </div>
            </div>     
        </>
    )
}
//*************************************************  PRODUCT PAGE NAVBAR   ********************************************************************/ 
export const CartPage_NavBar = (props) => {
    return (
        <>
            <nav className="navbar Planner_scroll navbar-expand-sm fixed-top" id="boutique_Productpage_navbar">
                <div className="container-fluid">
                    <a className="navbar-brand ml-5" href="#"  onClick={()=>props.handleShow(false)}>BooKing</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end mx-5" id="navbarNavDropdown">
                        <ul className="navbar-nav">

                            <li className="nav-item my-1 mx-2">
                                <Link to="/planpackage/boutique">
                                    <button className="btn-back">Back</button>
                                </Link>
                            </li>

                            <li className="nav-item my-1">
                                {/* <Link to="/Cart"> */}
                                    <button  onClick={()=>props.handleShow(true)}  className="btn-cart">Cart <ShoppingCartIcon /> <sup>{props.count}</sup>   </button>
                                {/* </Link> */}
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}

