function Icones(props) {
  const { url, id, name } = props
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
export default Icones
