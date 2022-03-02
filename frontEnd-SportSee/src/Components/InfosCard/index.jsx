function InfosCard({ number, name, icone }) {
  return (
    <div className="cardContent">
      <div className="cardContent__icone">
        <img
          className="cardContent__icone__img"
          src={`${icone}`}
          alt={`${name}`}
        />
      </div>
      <div className="cardContent__infos">
        <span className="cardContent__infos__number">{number}</span>
        <span className="cardContent__infos__name">{name}</span>
      </div>
    </div>
  )
}

export default InfosCard
