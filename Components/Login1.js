import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'
const Login1 =()=>{
    const  navigate = useNavigate();
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    async function submit(e){
        e.preventDefault();
        try
        {
            await axios.post("http://localhost:3000/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist")
                {
                    navigate("/homepage",{state:{id:email}})
                }
                else if(res.data=="notexist")
                {
                    alert("user have not sign up")
                }

            })
            .catch(e=>{
                alert("wrong details ")
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
                <h1>login</h1>
            <form action="POST">
                <input type="email" onChange={(e)=>{setemail(e.target.value)}} placeholder="email" name="" />
                <input type="password" onChange={(e)=>{setpassword(e.target.value)}} placeholder="password" name="" />
<input type="submit" onClick={submit} />
            </form>
            
            <Link to="/register">
                Register
            </Link>
        </div>
        </>
    )

}
export default Login1;