import React, { FC } from "react";
import ReactDom from "react-dom";
import "./style.scss";

const App: FC = () => {
  const env = process.env.NODE_ENV;
  return (
    <div>
      <h1>Hello World TS</h1>
      {/* <img src={Img} alt="" /> */}
      <h2>{env}</h2>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
