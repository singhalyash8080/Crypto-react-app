import React, { useState } from "react";
import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faEllipsisVertical,
  faEllipsis,
  faHouse,
  faUsers,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);

  const menuDropDownList = [
    { text: "Home", icon: faHouse },
    { text: "About us", icon: faUsers },
    { text: "Settings", icon: faGear },
  ];

  return (
    <>
      <div className="navbarContainer">
        <div className="navbarIconContainer navbarBackButton">
          <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#bec4cb" }} />
        </div>

        <p className="navbarHeading"> Bitcoin Wallet</p>
        <div
          className="navbarIconContainer navbarMenuButton"
          onClick={() => {
            setIsMenuDropdownOpen(!isMenuDropdownOpen);
          }}
        >
          <FontAwesomeIcon
            icon={isMenuDropdownOpen ? faEllipsis : faEllipsisVertical}
            style={
              isMenuDropdownOpen
                ? { color: "#bec4cb", position: "relative", right: "5%" }
                : { color: "#bec4cb" }
            }
          />
        </div>
      </div>
      {isMenuDropdownOpen ? (
        <div className="menuDropdownContainer">
          <div className="menuDropdownBox">
            <div className="menuDropdown">
              {menuDropDownList.map(({ text, icon }) => {
                return (
                  <div className="menuDropdownItem">
                    <p> {text}</p>
                    <div className="menuDropdownIcon">
                      <FontAwesomeIcon icon={icon} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
