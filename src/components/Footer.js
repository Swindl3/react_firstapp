import React from "react";

const Footer = props => {
  const { name, uni } = props;
  return (
    <div className="container-fluid">
      <hr />
      <div className="text-center title text-uppercase">
        <small>
          <span className="text-danger">Powered By : {name} </span>|
          <span className="text-muted"> Contact me : {uni}</span>
        </small>
      </div>
    </div>
  );
};

export default Footer;
