import React, { useState } from 'react';
import './Homepage.css'
const Blog =()=>{

    return(
        <> 
            <div className="container-fluid col-lg-12" id="homepage_blog">
                <div className="row">
                    <div className="col-12 col-md-6" id="content">
                        <h3>Thandunane' Wedding Planners Services {'&'} Freelancers </h3>
                        <li>Thandunane's Wedding Package </li>
                        <p> Thandunane's Wedding package is our planners are take to full responsiblity and Memorible of Our Wedding Event </p>
                        <li>Thandunane's Wedding Plans </li>
                        <p> Thandunane's Wedding Plans is Provides to several plans which you want you choose to plans </p>
                        <li>Thandunane's Wedding Freelancers</li>
                        <p> Thandunane's Wedding Freelances is have sevaral categroies you want choose budget </p>
                    </div>
                   
                    <div className="col-12 col-md-6" id="video">
                        <video autoPlay controls muted loop height="300px" width="550px">
                                <source src={'https://drive.google.com/uc?export=view&id=10sV8pR_jUhCj5dCdBKGdx386w2doIPOc'} type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>          
        </>
    );
}
export default Blog;