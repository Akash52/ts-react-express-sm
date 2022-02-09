import React, { FC, useEffect, useState } from "react";
import ReactDom from "react-dom";
import "./style.scss";

const App: FC = () => {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    const url = "https://raw.githubusercontent.com/Akash52/awesome-Javascript-collection/master/data.json";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.profiles);
        setAdvice(json.name);
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
