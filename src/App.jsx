import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [rispostaAPi, setRispostaAPi] = useState([]);

  useEffect(() => {
    fetchAPi();
  }, []);

  function fetchAPi() {
    axios
      .get("https://lanciweb.github.io/demo/api/actresses/")
      .then((risposta) => {
        console.log(risposta.data);
        setRispostaAPi(risposta.data);
      });
  }

  return (
    <div className="container">
      <h1 className="text-center mt-5">ACTRESSES</h1>
    </div>
  );
}

export default App;
