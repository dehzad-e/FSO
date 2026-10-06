import { useState } from "react";

const NameEcho = () => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted: ", name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button type="submit">Save</button>
    </form>
  );
};

const App = () => {
  return <NameEcho />;
};

export default App;
