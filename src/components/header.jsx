import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-9 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  class="btn-request-demo"
                  href="https://forms.gle/mZw2iD5mMpH9HnrF6"
                  target="_blank"
                  rel="noreferrer"
                >
                  預約 DEMO
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
