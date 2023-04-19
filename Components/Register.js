import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'
const Register =()=>{
    const  navigate = useNavigate();
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    async function submit(e){
        e.preventDefault();
        try
        {
            await axios.post("http://localhost:3000/register",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist")
                {
                    alert("user already exist")
                }
                else if(res.data=="notexist")
                {
                    navigate("/homepage",{state:{id:email}})
                }

            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })
        }
        catch(e){
            console.log(e);
        }

    }
    return(
        <>
        <div className="login">
                <h1>Register</h1>
            <form action="POST">
                <input type="email" onChange={(e)=>{setemail(e.target.value)}} placeholder="email" name="" />
                <input type="password" onChange={(e)=>{setpassword(e.target.value)}} placeholder="password" name="" />
<input type="submit" onClick={submit} />
            </form>
            <Link to="/">
                login
            </Link>
        </div>
        </>
    )

}
export default Register;