import Input from "./components/Input";

function App() {
  return (
    <main>
      <Input labelText="Username" id="username" type="text" />
      <Input labelText="Age" id="age" type="number" />
    </main>
  );
}

export default App;
