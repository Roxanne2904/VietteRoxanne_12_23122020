import PropType from 'prop-types'

/**
 * Display an Icon in order to navigate to an activity.
 * @return { HtmlElements } IconeToNavigate's component is displayed dynamically.
 */

IconToNavigate.propTypes = {
  url: PropType.string,
  id: PropType.number,
  name: PropType.string,
}

function IconToNavigate({ url, id, name }) {
  return (
    <div className="iconesContent">
      <img
        className="iconesContent__icones"
        src={`${url}`}
        alt={`${name}icone`}
        key={`${name}-${id}`}
      />
    </div>
  )
}
export default IconToNavigate
