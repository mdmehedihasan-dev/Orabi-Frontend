/* eslint-disable react/prop-types */

const Badge = ({title}) => {
  return (
    <span className="absolute top-5 left-5 bg-primaryColor text-sm font-bold font-dm text-white px-8 py-2">{title}</span>
  )
}

export default Badge