import "./App.css";
import Add from "./Components/Add/Add";
import Input from "./Components/Input/Input";
import Search from "./Components/Search/Search";

function App() {
  return (
    <div className="App">
      <h1>Add Your List Here</h1>
      <Search/>
      <Input />
      <Add />
    </div>
  );
}

export default App;
