const Header = ({ title }) => {
  return <h1>{title}</h1>;
};

const Footer = ({ text }) => {
  return <p>{text}</p>;
};

const App = () => {
  const appName = "React App";
  return (
    <div>
      <Header title={appName} />
      <p>This is my react app</p>
      <Footer text="All rights resolved" />
    </div>
  );
};

export default App;
