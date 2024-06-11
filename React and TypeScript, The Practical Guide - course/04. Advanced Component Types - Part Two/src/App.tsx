import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <main>
      <Input labelText="Username" id="username" type="text" />
      <Input labelText="Age" id="age" type="number" />

      <Button el="btn" text="Click me" />
      <Button el="link" href="https://google.com" text="Google" />
    </main>
  );
}

export default App;
