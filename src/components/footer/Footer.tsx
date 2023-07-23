import React, { useState } from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderClosed,
  faCompass,
  faBell,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  const footerTabs = [
    { icon: faFolderClosed },
    { icon: faCompass },
    { icon: faBell },
    { icon: faGear },
  ];

  const [tabIndexSelected, setTabIndexSelected] = useState(0)

  return (
    <div className="footerContainer">
      <div className="footerBox">
        {footerTabs.map((tab, idx) => {
          return (
            <div className="footerIconContainer">
              <FontAwesomeIcon
                icon={tab.icon}
                style={tabIndexSelected === idx ? { color: "#1c344f" } : { color: "#bec4cb" }}
                onClick={() => {
                    setTabIndexSelected(idx)
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
