import React from "react";
import headerimg from "../assests/airbnb.jpg"

const Header=()=>{
return(
  <div>
    <img src={headerimg} alt="Header" style={{ width: "100%" }} />
  </div>
);
}
export default Header;