export default function Card({ attrici }) {
  const { name, birth_year, image, biography, nationality, awards } = attrici;
  return (
    <div className="col">
      <div className="card h-100">
        <img src={image} className="card-img-top h-50" alt={name} />

        <div className="card-body">
          <h5 className="card-title fs-2">{name}</h5>
          <p className="card-text fs-5">
            {birth_year} {nationality}
          </p>
          <p className="card-text fs-5">{biography}</p>
          <p className="card-text fs-5">{awards}</p>
        </div>
      </div>
    </div>
  );
}
