import { useState } from "react";

const NameEcho = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <p>You typed: {name}</p>
    </div>
  );
};

const App = () => {
  return <NameEcho />;
};

export default App;
