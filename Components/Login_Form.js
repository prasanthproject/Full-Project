import React,{useState} from 'react';
import {useFormik} from 'formik';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'
import './login.css'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
const validate = values =>{
    const errors={};
    if(!values.loginEmail){
        errors.loginEmail="*Requied";
    }else if( !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.loginEmail)){
          errors.loginEmail="*Invaild Email Address";  
    }
    if(!values.loginPassword){
        errors.loginPassword="*Required";
    }else if(values.loginPassword.length>8){
        errors.loginPassword="* Maximum 8 Characters";
    }else if(values.loginPassword.length<4){
        errors.loginPassword="* Miniimum 4 Characters";
    }
    return errors;
}

const Login_Form =()=>{
    
    const [isLoginShown , setisLoginShown] = useState(false);
   
    const logintogglepassword =()=>{
        setisLoginShown((isLoginShown)=> !isLoginShown);
    }
    const [bool,setbool]=useState(0);

    const formik = useFormik({
       
        initialValues:{ 
            loginEmail:'',
            loginPassword:'',
        
        },
        validate,
        
        onSubmit: (values,{resetForm}) => {
            if(bool){
                setbool(0);
                resetForm({values:''})
            }else{   
                setbool(1);
                console.log(values);
            }
        },
        // onSubmit:values=>{
        //     alert(`Hello! ,${values.loginEmail} you successfully  Signed Up! `);
        // }
    });
    // console.log(formik.values)
 
    return(
        <>
           <nav className= "navbar scroll navbar-expand-sm  fixed-top" id="homapageNavbar">
            <a className="navbar-brand ml-5" href="#">BooKing</a>   
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end mx-5" id="navbarNavDropdown">
                    {/* <ul className="navbar-nav">     
                        <li className="nav-item">
                         <Link to="/">
                            <a className="nav-link">Home</a>
                         </Link>
                        </li>                            
                    </ul> */}
                </div>
        </nav>
           {/* <form action="POST"> */}
            <div className="container" id="login_form">
                <div className="card col-12 col-md-8 col-lg-5 mx-auto mt-4">
                    <div className="card-body">    
<form onSubmit={formik.handleSubmit}>
    <input id="email" className={formik.touched.loginEmail && formik.errors.loginEmail ? "form-control my-2": "form-control my-3"} type="text" name="loginEmail" placeholder="abcd@mail.com" autoComplete="off" onChange={formik.handleChange}  value={formik.values.loginEmail} onBlur={formik.handleBlur} style={{ border: formik.touched.loginEmail && formik.errors.loginEmail ? '2px red solid' : null}}/>
    {
        formik.touched.loginEmail && formik.errors.loginEmail ? <span id="required">{formik.errors.loginEmail} </span> :null
    }
    <input id="password" className={formik.touched.loginPassword && formik.errors.loginPassword ? "form-control my-2": "form-control my-3"}   type={isLoginShown ? "text" : "password"} name="loginPassword" placeholder="Password"  autoComplete="off" onChange={formik.handleChange}  value={formik.values.loginPassword} onBlur={formik.handleBlur} style={{ border: formik.touched.loginPassword && formik.errors.loginPassword ? '2px red solid' : null}}/>
    {
            formik.touched.loginPassword && formik.errors.loginPassword ? <span id="required">{formik.errors.loginPassword} <br/></span> :null
    }
    <label><input  className="mb-2 mx-1" type="checkbox" id="showpassword1" onChange={logintogglepassword} checked={isLoginShown} /><span className="mt-2 mx-1">  show password </span> </label>
    
    <Link to="/homepage">
    <input type="submit"  value="LOGIN" id="login_btn" className="mt-4 mx-4"/>
    </Link>
</form>
                    </div>
                    <Link to="/register">
                    <label id="login_footer" className="text-center mx-5 my-3">  D'not have account <a href="#" className="text-primary" >Register here</a> </label>
                    </Link>
                </div>      
                <div className="message_box">
                            {
                                bool?(<Login_Popup onClick={formik.handleSubmit}/>):null
                            } 

                        </div>  
            </div>     
            {/* </form> */}
        </>
    )
}

class Login_Popup extends React.Component{
    render(){
        return(
            <div className="Popup">
                <div className="Popup_inner">
                      <h1 className="close" onClick={this.props.onClick}> <CloseRoundedIcon/></h1>
                      <br/>
                      <br/>
                      <div className="text-center">
                          <span className="tick">&#10003;</span>
                      </div>  
                      <h2 className="text2"> You have Successfully Login</h2>
                </div>
            </div>
        )
    }
}

export default Login_Form;