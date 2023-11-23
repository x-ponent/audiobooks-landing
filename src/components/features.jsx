import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>優勢分析</h2>
        </div>
        <div className="row compare">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${i}`} className="col-xs-6 col-md-5">
                  <h3>{d.title}</h3>{" "}
                  {d.text.map((t, idx) => (
                    <p key={idx}>{t}</p>
                  ))}
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
