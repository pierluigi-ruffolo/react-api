import { useActionState, useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";

function App() {
  const [rispostaAPiAttrici, setRispostaAPiAttrici] = useState([]);
  const [rispostaAPiAttori, setRispostaApiAttori] = useState([]);

  const [rispostaAttrici, setrispostaAttrici] = useState(false);
  const [rispostaAttori, setrispostaAttori] = useState(false);
  const [attoriAttrici, setAttoriAttrici] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    if (rispostaAttrici === true && rispostaAttori === true) {
      setAttoriAttrici([...rispostaAPiAttrici, ...rispostaAPiAttori]);
    }
  }, [rispostaAttrici, rispostaAttori, rispostaAPiAttrici, rispostaAPiAttori]);

  function fetchApi() {
    axios
      .get("https://lanciweb.github.io/demo/api/actresses/")
      .then((risposta) => {
        setRispostaAPiAttrici(risposta.data);
        console.log(risposta.data);
        setrispostaAttrici(true);
      });

    axios
      .get("https://lanciweb.github.io/demo/api/actors/")
      .then((risposta) => {
        setRispostaApiAttori(risposta.data);
        setrispostaAttori(true);
      });
  }

  return (
    <div className="container">
      <h1 className="text-center mt-5">ACTRESSES</h1>
      <div className="row row-cols-2  row-cols-md-3 mt-4 gy-4">
        {/*  inizio colonna con card  */}
        {rispostaAPiAttrici.map((attrici) => (
          <Card key={attrici.id} attrici={attrici}></Card>
        ))}
        {rispostaAPiAttori.map((attori) => (
          <Card key={attori.id} attrici={attori}></Card>
        ))}
        {attoriAttrici.map((a, index) => (
          <Card key={index} attrici={a}></Card>
        ))}

        {/*  fine colonna con card  */}
      </div>
    </div>
  );
}

export default App;
