
import React, { useEffect, useState } from "react";


const Navbar = () => {
    
    const Logout=() => {
        window.location.href = "/login";
    }

    return (
        <div style={{width:"100%" , background:"#ccc"}}>
            <div className="d-flex justify-content-between p-4" >
                <div>
                    Daily Tasks
                </div>
                <div>
                    <button onClick={Logout}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Navbar;