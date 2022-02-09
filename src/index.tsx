import React, { FC, useEffect, useState } from "react";
import ReactDom from "react-dom";
import "./style.scss";

const App: FC = () => {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    const url = "https://api.adviceslip.com/advice";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.slip.advice);
        setAdvice(json.slip.advice);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <h1>Hello World</h1>
      <p>{advice}</p>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
