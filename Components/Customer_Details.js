import React from 'react'
import { Link } from 'react-router-dom';
import './Homepage.css'
const Customer_Details =()=>{
    return(
        <>
            <div className="container" id="customer_details">
                <div className="row">
                    <div className="card col-4 px-3 py-2">
                    <h3> Details </h3>
                        <form>
                            <input type="text" placeholder="Groom Name" className="px-4 py-2 mx-5 my-2"  autoComplete="off"  required/><br/>
                            <input type="text" placeholder="Bride Name" className="px-4 py-2 mx-5 my-2"  autoComplete="off"  required /><br/>
                            <p className="mx-5 ">Function Date</p>
                            <input type="date" className="mx-5" required/><br/>
                            <input type="number" placeholder="Phone No" className="px-4 py-2 mx-5 my-2"  autoComplete="off"  required /><br/>
                            <textarea cols="29" rows="5" className="mx-5" placeholder="Address" autoComplete="off"   required>    </textarea><br/>
                             <Link to="/planpackage">
                                    <input type="submit" value="See More" id="btn" className=" btn-success mx-5 my-2 py-1 px-3" />
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )


}
export default Customer_Details;