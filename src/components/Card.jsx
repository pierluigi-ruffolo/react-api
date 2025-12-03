export default function Card({ attrici }) {
  const { name, birth_year, image, biography, nationality, awards } = attrici;

  let premi = "";
  if (typeof awards === "string") {
    if (awards === "None") {
      premi = "nessun premio vinto";
    } else {
      premi = awards;
    }
  } else if (Array.isArray(awards)) {
    const stringaPremi = awards.join(", ");
    if (stringaPremi === "None") {
      premi = "nessun premio vinto";
    } else {
      premi = stringaPremi;
    }
  }

  return (
    <div className="col">
      <div className="card h-100">
        <img src={image} className="card-img-top h-50" alt={name} />

        <div className="card-body">
          <h5 className="card-title fs-2">{name}</h5>
          <p className="card-text fs-5">
            {birth_year} {nationality}
          </p>
          <p className="card-text fs-4">{biography}</p>
          <p className="card-text fs-4">{premi}</p>
        </div>
      </div>
    </div>
  );
}
