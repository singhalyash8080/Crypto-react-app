import React, { useState } from "react";
import "./CurrencyInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBitcoinSign,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import CircularIcon from "../../common/circularIcon/CircularIcon";

const CurrencyInfo: React.FC = () => {
  const [isContentExpanded, setIsContentExpanded] = useState(false);
  return (
    <div className="currencyInfoContainer">
      <div className="currencyInfoHeading">
        <div style={{ width: "25%" }}>
          <CircularIcon
            icon={
              <FontAwesomeIcon
                icon={faBitcoinSign}
                style={{ color: "white" }}
              />
            }
            backgroundGradient="linear-gradient(0deg, #ff8f17 0%, #ffc743 100%)"
          />
        </div>

        <div style={{ width: "65%", color: "#4c5968", fontWeight: "bold" }}>
          <p> Bitcoin</p>
        </div>

        <div style={{ width: "10%", color: "#aeb8c4", fontWeight: "bold", textAlign: 'end' }}>
          <p>BTC</p>
        </div>
      </div>

      <div className="currencyInfoContent">
        <h1 style={{ color: "#4c5968", fontWeight: "bold", marginBottom: "0" }}>
          3.529020 BTC
        </h1>
        <div className="currencyInfoContentDetail">
          <p
            style={{
              color: "#aeb8c4",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "25px",
              marginTop: 0,
            }}
          >
            $19.153 USD
          </p>

          <p
            style={{
              width: "70px",
              height: "35px",
              borderRadius: "51px",
              backgroundColor: "#ee225d",
              color: "white",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 0,
              fontSize: "18px",
              padding: "3px",
            }}
          >
            -2.32%
          </p>
        </div>

        {isContentExpanded ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ width: "50%", textAlign: "center" }}>
              <button style={{padding: '5px', backgroundColor: '#17c7fb', color: 'white', border: 'none', cursor: 'pointer'}}>Buy</button>
            </div>
            <div style={{ width: "50%", textAlign: "center" }}>
              <button style={{padding: '5px', backgroundColor: '#ff677c',  color: 'white', border: 'none', cursor: 'pointer'}}>Sell</button>
            </div>
          </div>
        ) : null}

        <div
          style={{ textAlign: "center", fontSize: "30px", cursor: "pointer" }}
          onClick={() => {
            setIsContentExpanded(!isContentExpanded);
          }}
        >
          <FontAwesomeIcon
            icon={isContentExpanded ? faChevronUp : faChevronDown}
            style={{ color: "#bec4cb" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CurrencyInfo;
