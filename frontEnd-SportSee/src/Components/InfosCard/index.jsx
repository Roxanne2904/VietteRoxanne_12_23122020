import PropType from 'prop-types'

/**
 * Display a card with various sports performance informations.
 * @return { HtmlElements } InfosCards's component is displayed dynamically.
 */

function InfosCard({ numberUnit, name, png, svg, color }) {
  return (
    <div className="cardContent">
      <div className={`cardContent__icone cardContent__icone--${color}`}>
        <img
          className="cardContent__icone__img"
          src={`${png}`}
          srcSet={svg}
          alt={`${name}`}
          height={25}
          width={25}
        />
      </div>
      <div className="cardContent__infos">
        <span className="cardContent__infos__number">{numberUnit}</span>
        <span className="cardContent__infos__name">{name}</span>
      </div>
    </div>
  )
}

InfosCard.propTypes = {
  numberUnit: PropType.string.isRequired,
  name: PropType.string.isRequired,
  png: PropType.string.isRequired,
  svg: PropType.string.isRequired,
  color: PropType.string.isRequired,
}

export default InfosCard
