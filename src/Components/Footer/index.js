import React from "react";
import "./style.css";
import { BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="fulldiv">
        <div className="icon">
          <Link to="" id="path">
            {" "}
            <BsInstagram />{" "}
          </Link>
          <Link to="" id="path">
            {" "}
            <BsTwitter />{" "}
          </Link>
          <Link to="" id="path">
            {" "}
            <BsGithub />{" "}
          </Link>
        </div>

        <h4
          style={{
            color: "white",
            fontFamily:
              "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
          }}
        >
          جميع الحقوق محفوظة لومـيـض - 2021
        </h4>
      </div>
    </>
  );
};

export default Footer;
