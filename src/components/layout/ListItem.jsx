/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

const ListItem = ({itemName,className,href}) => {
  return (
    <Link to={href}>
    <li className={className}>{itemName}</li>
    </Link>
  )
}

export default ListItem