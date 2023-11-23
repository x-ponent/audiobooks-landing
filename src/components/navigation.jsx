import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a
            class="btn-request-demo nav-active"
            href="https://forms.gle/mZw2iD5mMpH9HnrF6"
            target="_blank"
            rel="noreferrer"
          >
            預約DEMO
          </a>
          <a className="navbar-brand page-scroll" href="#page-top">
            <i>A</i>ud<i>I</i>obooks
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right" data-bs-offset="-50">
            <li>
              <a href="#features" className="page-scroll">
                優勢分析
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                服務內容
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                關於我們
              </a>
            </li>
            {/*
              <li>
                <a href="#portfolio" className="page-scroll">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" className="page-scroll">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#team" className="page-scroll">
                  Team
                </a>
              </li>
            */}
            <li>
              <a href="#contact" className="page-scroll">
                聯絡資訊
              </a>
            </li>
            <a
              class="btn-request-demo"
              href="https://forms.gle/mZw2iD5mMpH9HnrF6"
              target="_blank"
              rel="noreferrer"
            >
              預約DEMO
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};
