import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first: "B",
    last: "W",
  };

  const nameList = [
    {
      first: "B",
      last: "W",
    },
    {
      first: "C",
      last: "K",
    },
    {
      first: "P",
      last: "D",
    },
  ];

  return (
    <div className="App">
      <Greet name="Vishwas" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
