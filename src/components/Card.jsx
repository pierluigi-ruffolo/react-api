export default function Card({ attrici }) {
  const { name, birth_year, image, biography, nationality, awards } = attrici;
  return (
    <div className="col">
      <div className="card h-100">
        {/*  <img src={image} className="card-img-top" alt="...">  */}
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {birth_year} {nationality}
          </p>
          <p className="card-text">{biography}</p>
          <p>{awards}</p>
        </div>
      </div>
    </div>
  );
}
