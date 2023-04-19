import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import  {Tiffen_items,Sidedish_items,Chunty_items,Vada_items,Sweet_items,Dessarts_items,beverages} from './Catering_data';
import './catering.css';
// import {Sidedish,Sweet_and_Dessarts,Vada} from './Menu_items';
// import MenuItems from './Menu_items';

function Dinner_Menu(){
    return(
        <>
            <div className="text-center">
                    <h3>Dinner</h3>
            </div>
        </>
    )
}
function Tiffen({addtoCart})
{
    return(
    <>
        <div className="" id="dinner_menu_items">
            <div id="dinner_title">
                <h2> Dinner</h2>
            </div>
            <div className="col-12 col-sm-12 col-md-10 col-xl-6 mx-auto" id="dinner_items">
                    <div className="text-center">
                        <h4> Tiffen</h4>
                    </div>
                    <div>
                        <table>
                                <tr>
                                    <th>IMAGES</th>
                                    <th>Name</th>
                                    <th></th>
                                    <th>Price</th>
                                    <th className="px-4"><ShoppingCartIcon/> </th>
                                </tr>
                                {Tiffen_items.map((value,key)=>{
                                    return(
                                        <tr key={key}>
                                            <td> <img src={value.images} alt="" width={100} height={100}/> </td>
                                            <td id="menu_name">{value.name}</td>
                                            <td id="each_count">each</td>
                                            <td id="menu_price">{value.price}</td>
                                            <td> <button onClick={()=>addtoCart(value)}> Add </button></td>
                                        </tr>
                                    );
                                })}
                        </table>
                    </div>
            </div> 
        </div>
    </>
    )
}
function Sidedish3({addtoCart}){
    return(
        <>
        <div className="" id="dinner_menu_items">
            <div id="dinner_title">
                <h2> Dinner</h2>
            </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-10 col-xl-6 mx-auto" id="dinner_items">
                            <div className="text-center">
                                <h4> Side Dish</h4>
                            </div>
                            <div>
                                <table>
                                    <tr>
                                            <th>IMAGES</th>
                                            <th>Name</th>
                                            <th></th>
                                            <th>Price</th>
                                            <th className="px-4"><ShoppingCartIcon/> </th>
                                    </tr>
                                    {Sidedish_items.map((value,key)=>{
                                        return(
                                            <tr key={key}>
                                                <td> <img src={value.images} alt="" width={100} height={100}/> </td>
                                                <td id="menu_name">{value.name}</td>
                                                <td id="each_count">per Lit</td>
                                                <td id="menu_price">{value.price}</td>
                                                <td> <button onClick={()=>addtoCart(value)}> Add </button></td>
                                            </tr>
                                        );
                                    })}
                                </table>
                            </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-10 col-xl-6 mx-auto" id="dinner_items">
                            <div className="text-center">
                                <h4> Chunty</h4>
                            </div>
                            <div>
                                <table>
                                    <tr>
                                        <th>IMAGES</th>
                                        <th>Name</th>
                                        <th></th>
                                        <th>Price</th>
                                        <th className="px-4"><ShoppingCartIcon/> </th>
                                    </tr>
                                    {Chunty_items.map((value,key)=>{
                                        return(
                                            <tr key={key}>
                                                <td> <img src={value.images} alt="" width={100} height={100}/> </td>
                                                <td id="menu_name">{value.name}</td>
                                                <td id="each_count">per Lit</td>
                                                <td id="menu_price">{value.price}</td>
                                                <td> <button onClick={()=>addtoCart(value)}> Add </button></td>
                                            </tr>
                                        );
                                    })}
                                </table>
                            </div>
                    </div> 
                </div>
        </div>
        </>

    )
}
function Sweets3({addtoCart}) {
    return(
        <>
             <div className="" id="dinner_menu_items">
            <div id="dinner_title">
                <h2> Dinner</h2>
            </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-10 col-xl-6 mx-auto " id="dinner_items">
                            <div className="text-center">
                                <h4>Sweets</h4>
                            </div>
                            <div>
                                <table>
                                    <tr>
                                        <th>IMAGES</th>
                                        <th>Name</th>
                                        <th></th>
                                        <th>Price</th>
                                        <th className="px-4"><ShoppingCartIcon/> </th>
                                    </tr>
                                    {Sweet_items.map((value,key)=>{
                                        return(
                                             <tr key={key}>
                                                <td> <img src={value.images} alt="" width={100} height={100}/> </td>
                                                <td id="menu_name">{value.name}</td>
                                                <td id="each_count">each</td>
                                                <td id="menu_price">{value.price}</td>
                                                <td> <button onClick={()=>addtoCart(value)}> Add </button></td>
                                            </tr>
                                        );
                                    })}
                                </table>
                            </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-10 col-xl-6 mx-auto " id="dinner_items">
                            <div className="text-center">
                                <h4> Halwa</h4>
                            </div>
                            <div>
                                <table>
                                    <tr>
                                            <th>IMAGES</th>
                                            <th>Name</th>
                                            <th></th>
                                            <th>Price</th>
                                            <th className="px-4"><ShoppingCartIcon/> </th>
                                    </tr>
                                    {Dessarts_items.map((value,key)=>{
                                        return(
                                            <tr key={key}>
                                                <td> <img src={value.images} alt="" width={100} height={100}/> </td>
                                                <td id="menu_name">{value.name}</td>
                                                <td id="each_count">200g</td>
                                                <td id="menu_price">{value.price}</td>
                                                <td> <button onClick={()=>addtoCart(value)}> Add </button></td>
                                            </tr>
                                        );
                                    })}
                                </table>
                            </div>
                    </div> 
                </div>
        </div> 
        </>

    )
}
function Vada3({addtoCart}){
        return(
            <div className="" id="dinner_menu_items">
            <div id="dinner_title">
                <h2> Dinner</h2>
            </div>
            <div className="col-12 col-sm-12 col-md-10 col-xl-6 mx-auto" id="dinner_items">
                    <div className="text-center">
                        <h4> Vadaa</h4>
                    </div>
                    <div>
                        <table>
                            <tr>
                                <th>IMAGES</th>
                                <th>Name</th>
                                <th></th>
                                <th>Price</th>
                                <th className="px-4"><ShoppingCartIcon/> </th>
                            </tr>
                            {Vada_items.map((value,key)=>{
                                return(
                                    <tr key={key}>
                                        <td> <img src={value.images} alt="" width={100} height={100}/> </td>
                                        <td id="menu_name">{value.name}</td>
                                        <td id="each_count">each</td>
                                        <td id="menu_price">{value.price}</td>
                                        <td> <button onClick={()=>addtoCart(value)}> Add </button></td>
                                    </tr>
                                );
                            })}
                        </table>
                    </div>
            </div>
        </div>

        )
}
function Beverages({addtoCart}){
    return(
        <div className="" id="dinner_menu_items">
        <div id="dinner_title">
            <h2> Dinner</h2>
        </div>
        <div className="col-12 col-sm-12 col-md-10 col-xl-6 mx-auto" id="dinner_items">
                <div className="text-center">
                    <h4> Beverages</h4>
                </div>
                <div>
                    <table>
                        <tr>
                            <th>IMAGES</th>
                            <th>Name</th>
                            <th></th>
                            <th>Price</th>
                            <th className="px-4"><ShoppingCartIcon/> </th>
                        </tr>
                        {beverages.map((value,key)=>{
                            return(
                                <tr key={key}>
                                    <td> <img src={value.images} alt="" width={100} height={100}/> </td>
                                    <td id="menu_name">{value.name}</td>
                                    <td id="each_count">per cup</td>
                                    <td id="menu_price">{value.price}</td>
                                    <td> <button onClick={()=>addtoCart(value)}> Add </button></td>
                                </tr>
                            );
                        })}
                    </table>
                </div>
        </div>
    </div>

    )
}

export {Tiffen,Sidedish3,Sweets3,Vada3,Beverages};
export default Dinner_Menu;