import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import  {Tiffen_items,Sidedish_items,Chunty_items,Vada_items,Sweet_items,Dessarts_items} from './Catering_data';

const MenuItems=({addtoCart})=>{
    return(
        <div className="container-fluid" id="menu_items">
            <div id="breakfast_title">
                <h2> Breakfast</h2>
            </div>
            <div className="col-12 col-sm-12 col-md-10 col-xl-8 mx-auto" id="tiffen_items">
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
                                            <td id="each_count">each </td>
                                            <td id="menu_price"> {value.price}</td>
                                            <td> <button onClick={()=>addtoCart(value)}> Add </button></td>
                                        </tr>
                                    );
                                })}
                        </table>
                    </div>
            </div> 
        </div>
    );
}

function Sidedish({addtoCart}){
    return(
        <>
        <div className="" id="menu_items">
            <div id="breakfast_title">
                <h2> Breakefast</h2>
            </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-10 col-xl-6 mx-auto" id="tiffen_items">
                            <div className="text-center">
                                <h4 className="my-2"> Side Dish</h4>
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
                                                <td id="each_count">per Lit </td>
                                                <td id="menu_price">{value.price}</td>
                                                <td> <button onClick={()=>addtoCart(value)}> Add </button></td>
                                            </tr>
                                        );
                                    })}
                                </table>
                            </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-10 col-xl-6 mx-auto" id="tiffen_items">
                            <div className="text-center">
                                <h4 className="my-2"> Chunty</h4>
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
                                                <td id="each_count">per Lit </td>
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
function Vada({addtoCart}){
    return(
        <div className="" id="menu_items">
            <div id="breakfast_title">
                <h2> Breakefast</h2>
            </div>
                    <div className="col-12 col-sm-12 col-md-10 col-xl-6 mx-auto " id="tiffen_items">
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
                                                <td id="each_count">each </td>
                                                <td id="menu_price">{value.price}</td>
                                                <td> <button onClick={()=>addtoCart(value)}> Add </button></td>
                                            </tr>
                                        );
                                    })}
                                </table>
                            </div>
                    </div>
        </div>

    );
}
function Sweet_and_Dessarts({addtoCart}){
    return(
        <div className="" id="menu_items">
            <div id="breakfast_title">
                <h2> Breakefast</h2>
            </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-10 col-xl-6 mx-auto" id="tiffen_items">
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
                    <div className="col-12 col-sm-12 col-md-10 col-xl-6 mx-auto" id="tiffen_items">
                            <div className="text-center">
                                <h4> Halwa </h4>
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
      

    )
}
export {Sidedish,Vada,Sweet_and_Dessarts};
export default MenuItems;