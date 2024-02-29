
// eslint-disable-next-line react/prop-types
const Image = ({imgsrc,altName,className}) => {
  return (
    <img className={className} src={imgsrc} alt={altName} />
  )
}

export default Image