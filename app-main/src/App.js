import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import * as ReactDOM from "react-dom/client";

function App() {
  const [number, setNumber] = useState(0);

  const [innerHtml, setInnerHtml] = useState(null);
  useEffect(() => {
    const main = async () => {
      const resp = await fetch("http://localhost:3001");
      const serverString = await resp.text();
      console.log(serverString);

      // const newRoot = document.getElementById("newRoot");

      // newRoot.dangerouslySetInnerHTML = { __html: serverString };
      // root.render(serverString);
      setInnerHtml(serverString);
      const script = document.createElement("script");
      script.src = "http://localhost:3001/index.js";

      document.body.appendChild(script);
    };

    main();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => setNumber((number) => number + 1)}>
          This is a button: {number}
        </button>
      </header>

      <div id="newRoot"></div>
    </div>
  );
}

export default App;
