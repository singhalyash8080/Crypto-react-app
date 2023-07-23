import React from "react";
import "./Buttons.css";
import CircularIcon from "../../common/circularIcon/CircularIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

const Buttons: React.FC = () => {
  return (
    <div className="buttonsContainer">
      <div className="buyButton">
        <div>
          <CircularIcon
            icon={
              <FontAwesomeIcon icon={faDollarSign} style={{ color: "white" }} />
            }
            backgroundColor="#17c7fb"
          />
          <p>Buy BTC</p>
        </div>
      </div>
      <div className="sellButton">
        <div>
          <CircularIcon
            icon={
              <FontAwesomeIcon icon={faDollarSign} style={{ color: "white" }} />
            }
            backgroundColor="#ff677c"
          />
          <p>Sell BTC</p>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
