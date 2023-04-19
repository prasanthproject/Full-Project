import React, { useState, useEffect } from 'react'
import { Invite_ProductPage_NavBar } from './Invite_ProductPage'
import './Invitation.css'
const Invitation_CartList = ({ cart, handleShow }) => {
  const [CART, SETCART] = useState([])
  useEffect(() => {
    SETCART(cart)
  }, [cart])
  return (
    <>
      <Invite_ProductPage_NavBar count={cart.length} handleShow={handleShow} />
      <div className="" id="cartlist">
        {
          CART?.map((cartItem, cartIndex) => {
            return (
              <>

                <div className=" my-1 d-flex flex-wrap" id="cartlist_card">
                  <img className="mx-2" src={cartItem.images} width={100} alt="" />
                  <p id="name" className="mx-2">{cartItem.name} </p>
                  <p id="price" className="mx-2">Rs.{cartItem.price} </p>
                  <div className=" mx-5 row">
                    <button className="col-1" onClick={() => {
                      const _cart = CART.map((item, index) => {
                        return cartIndex === index ? { ...item, quantity: item.quantity === 10 ? item.quantity - 9 : item.quantity - 10 } : item
                      })
                      SETCART(_cart)
                    }}> - </button>

                    <p id="quantity" className="col-2">{cartItem.quantity} </p>

                    <button className="col-1"
                      onClick={() => {
                        const _cart = CART.map((item, index) => {
                          return cartIndex === index ? { ...item, quantity: item.quantity === 1 ? item.quantity + 9 : item.quantity + 10 } : item
                        })
                        SETCART(_cart)
                      }}
                    > + </button>

                  </div>
                  <p id="total"> Rs.{cartItem.price * cartItem.quantity}</p>

                </div>
              </>
            )
          })
        }
        <div id="totalprice">
          <h3>Total</h3>
          <p> Rs.{CART.map(item => item.price * item.quantity).reduce((total, value) => parseInt(total) + parseInt(value), 0)} </p>
        </div>
      </div>

    </>
  )
}
export default Invitation_CartList;