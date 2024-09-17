import Header from "./Header";
import PetList from "./PetList";

import {pets} from "../data/petsData";

console.log(pets);

function App() {
  return (
    <div className="app">
        <Header/>
        <PetList/>
    </div>
  );
}

export default App;