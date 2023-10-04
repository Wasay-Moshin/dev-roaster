import React from "react";
import { TbLogout } from "react-icons/tb";
function Header() {
  return (
    <div className="header">
      <nav className="navbar ">
        <div className="container-fluid p-2">
          <div>
            <img className="" src="Assets/logo.png" alt="" width={"40px"} />
          </div>
          <div>
            <TbLogout color="#9A59F5" size={20}/>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
