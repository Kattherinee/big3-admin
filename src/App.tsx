import "./index.css";
import Button from "./components/Button/Button";
import InputField from "./components/Input/Input";

function App() {
  return (
    <>
      <Button appearence="sign">Sign In </Button>
      <InputField label="Login" required />
    </>
  );
}

export default App;
