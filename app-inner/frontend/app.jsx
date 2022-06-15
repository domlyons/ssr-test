import { useState } from "react";

const App = () => {
  const [state, setState] = useState(0);

  return (
    <button onClick={() => setState((number) => number + 1)}>
      This is a button-inner: {state}
    </button>
  );
};

export default App;
