import "./App.css"
import IdCard from "./components/IdCard"
import Greetings from "./components/Greetings";
import Random from "./components/Random";

function App() {
  return (
    <div className="App">
      <h2>ID CARD</h2>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height="178"
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height="172"
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <h2>GREETINGS</h2>
      <Greetings lang="de">Anja</Greetings>
      <Greetings lang="fr">Isabelle</Greetings>
      <Greetings lang="es">Marina</Greetings>
      <Greetings lang="en">Jane</Greetings>

      <h2>RANDOM NUMBER</h2>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

    </div>
  );
}

export default App;
