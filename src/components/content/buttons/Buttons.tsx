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
            backgroundGradient="linear-gradient(0deg, #1d71f1 0%, #17c7fb 100%)"
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
            backgroundGradient="linear-gradient(0deg, #fa23a2 0%, #ff677c 100%)"
          />
          <p>Sell BTC</p>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
