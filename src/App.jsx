import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";

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
      <div className="row row-cols-2  row-cols-md-3 mt-4 gy-4">
        {/*  inizio colonna con card  */}
        {rispostaAPi.map((attrici) => (
          <Card key={attrici.id} attrici={attrici}></Card>
        ))}
        {/*  fine colonna con card  */}
      </div>
    </div>
  );
}

export default App;
