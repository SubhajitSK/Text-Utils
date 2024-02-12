import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Text Utils" />
      <Alert alert="This is alert" />
      <TextForm />
      <About />
    </>
  );
}

export default App;
