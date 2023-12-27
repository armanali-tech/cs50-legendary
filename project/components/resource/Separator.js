import React from "react";

const Separator = (props) => {
  const { heading, subheading } = props;
  return (
    <div className="separator">
      <h1>{heading}</h1>
      <hr />
      <p>{subheading}</p>
    </div>
  );
};

export default Separator;
