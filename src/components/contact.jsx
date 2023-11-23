import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  // const [{ name, email, message }, setState] = useState(initialState);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setState((prevState) => ({ ...prevState, [name]: value }));
  // };
  // const clearState = () => setState({ ...initialState });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(name, email, message);
  //   emailjs
  //     .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         clearState();
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-2 brand">
            <p><i>A</i>ud<i>I</i>obooks</p>
          </div>
          <div className="col-md-8 contactus">
            <p style={{ color: "white" }}>聯絡我們</p>
            <div>
              <i className="fa fa-envelope-o"></i> :{" "}
              <a href={`mailto: ${props.data?.email}`}>
                {props.data ? props.data.email : "loading"}
              </a>
            </div>
            <div>
              <i className="fa fa-book"></i> :{" "}
              <a href="https://forms.gle/mZw2iD5mMpH9HnrF6" rel="noreferrer" target="_blank">
                預約 DEMO
              </a>
            </div>
          </div>
          <div className="col-md-2"></div>
          {/*
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a href={props.data ? props.data.facebook : "/"}>
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href={props.data ? props.data.twitter : "/"}>
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href={props.data ? props.data.youtube : "/"}>
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          */}
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>&copy; 2023 TouShih Technology Ltd. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};
