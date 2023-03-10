import "./App.css";
import Greet from "./components/BasicProps/Greet";
import Heading from "./components/AdvancedProps/Heading";
import Oscar from "./components/AdvancedProps/Oscar";
import Person from "./components/BasicProps/Person";
import PersonList from "./components/BasicProps/PersonList";
import Status from "./components/AdvancedProps/Status";
import Button from "./components/EventProps/Button";
import Input from "./components/EventProps/Input";
import Container from "./components/StyleProps/Container";

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
      {/* Basic Props*/}
      <Greet name="Vishwas" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />

      {/* Advanced Props*/}
      <Status status="loading" />
      <Oscar>
        <Heading>Oscar foes to ...... </Heading>
      </Oscar>

      {/* Event Props*/}
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />

      {/* Styles Props*/}
      <Container styles={{ border: "2px solid black", padding: "1rem" }} />
    </div>
  );
}

export default App;
