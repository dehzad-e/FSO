import { useState } from "react";

const NameEcho = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <input value={name} />
      <p>You typed: {name}</p>
    </div>
  );
};

const App = () => {
  return <NameEcho />;
};

export default App;
