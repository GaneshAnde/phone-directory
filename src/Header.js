import React from "react";
import './Header.css'

const Header = function(props){
    //style={{textAlign:"center",background:"#000", color:'#fff', padding:20, fontSize:20,textTransform:'uppercase' }}
    
    return (
        <div>
            <div className="header">
               {props.heading}
            </div>
        </div>
        
    )
}

export default Header