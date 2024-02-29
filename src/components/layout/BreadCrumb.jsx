/* eslint-disable react/prop-types */
import {GoTriangleRight} from 'react-icons/go'

import { Link } from 'react-router-dom'
const BreadCrumb = () => {
  return (
    <div className='py-12 md:py-28'>
         <h1 className="mb-3 text-2xl font-bold capitalize lg:text-5xl font-dm">{window.location.pathname.split("/")[1]}</h1>
        <p className="text-xs font-dm text-primaryColor">
          <Link to='/'>Home</Link> <GoTriangleRight className='inline-block' /> {window.location.pathname.split("/")[1]}
        </p>
    </div>
  )
}

export default BreadCrumb