import React from "react";
import logo from "../assets/group.png";

const Contact = () => {
  return (
    <div className="container mt-2">
      <h2 className="display-6">Contact</h2>
      <div className="row mb-3">
        <div className="col">
          <img
            src={logo}
            width="50%"
            alt="Team Procedural"
            className="rounded mx-auto d-block"
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <h2 className="display-6">Himanshu Sudarshan</h2>
          <a href={"https://github.com/SudarshanHimanshu18"} rel="noreferrer" target="_blank" className="link-dark">
            Himanshu's Github
          </a>
        </div>
        <div className="col">
          <h2 className="display-6">Parwez Zafar</h2>
          <a href={"https://github.com/parwez-zafar"} rel="noreferrer" target="_blank" className="link-dark">
            Parwez's Github
          </a>
        </div>
        <div className="col">
          <h2 className="display-6">Akash Kant</h2>
          {/* <a href={"https://github.com/Akash1221"} rel="noreferrer" target="_blank" className="link-dark"> */}
          <a href={"https://github.com/Uzma12341"} rel="noreferrer" target="_blank" className="link-dark">
            Akash's Github
          </a>
        </div>
        <div className="col">
          <h2 className="display-6">Uzma Rashid</h2>
          <a href={"https://github.com/Invogue01"} rel="noreferrer" target="_blank" className="link-dark">
            Uzma's Github
          </a>
        </div>



      </div>
    </div>
  );
};

export default Contact;
