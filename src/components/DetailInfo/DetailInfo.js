import React from "react";

function DetailInfo() {
  const article1Styles = {
    position: "relative",
    width: "1000px",
    minWidth: "1000px",
    minHeight: "600px",
    height: "600px",
    padding: "25px",
    backgroundColor: "#ecf0f3",
    boxShadow: "10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9",
    borderRadius: "12px",
    overflow: "hidden",
  };

  const radioStyle = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <article style={article1Styles}>
      <h2>Pick your flavor</h2>
      <div style={radioStyle}>
        <label>
          <input type="radio" /> Chocolate
        </label>
        <label>
          <input type="radio" /> Vanilla
        </label>
        <label>
          <input type="radio" /> Strawberry
        </label>
        <label>
          <input type="radio" /> Raspberry
        </label>
        <label>
          <input type="radio" /> Walnut
        </label>
      </div>
      <h2>Pick your decorations</h2>
      <div style={radioStyle}>
        <label>
          <input type="radio" /> Fondant Icing
        </label>
        <label>
          <input type="radio" /> Royal Icing
        </label>
        <label>
          <input type="radio" /> Marzipan Decorations
        </label>
        <label>
          <input type="radio" /> Candles
        </label>
        <label>
          <input type="radio" /> Flowers
        </label>
      </div>
    </article>
  );
}

export default DetailInfo;
