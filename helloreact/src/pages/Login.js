
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "../components/footer";


const Login = (props) => {


    const {login} = props;
    const [UserName , setUserName] = useState("");
    const [pass , setPass] = useState("")

    const onUserNameInputChange = (e) => {
        setUserName(e.target.value);
    }

    const onPassChange = (e) => {
        setPass(e.target.value)
    }



    const isButtonDisabled = () => {
        const valid=/^[a-zA-Z0-9]+$/;
        if(!UserName && UserName.length < 4 && !pass && pass.length < 8 && valid.test(UserName)) return true;
        return false;
    }



    return (
        <>
            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
                
        <div style={{ border: "5px solid #000000", padding: "50px", borderRadius: "30px", backgroundColor: "#DC7633" }}>
            <div >
            <center><h1 style={{textDecoration:"underline"}}> Login</h1></center>
                <div className="row mt-4">
                    <div className="col-12 d-flex justify-content-center" >
                        <h6 style={{color:"black"}}>UserName</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <input value={UserName} onChange={onUserNameInputChange}></input>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 d-flex justify-content-center">
                    <h6 style={{color:"black"}}>Password</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <input value={pass} onChange={onPassChange}></input>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 d-flex justify-content-center">
                        <button className="btn btn-primary btn-lg" style={{backgroundColor:"black"}} onClick={login} disabled = {isButtonDisabled()}> Submit </button>
                    </div>
                    </div>
                    
            </div>
            </div>
           
            </div>
            <Footer /> 
            </>
    )
}


export default Login;
