
const Card = ({ id , name, email ,create_date }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{email}</p>
      <span>{create_date}</span>
    </div>
  );
}

export default Card;