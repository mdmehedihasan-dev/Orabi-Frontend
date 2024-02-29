/* eslint-disable react/prop-types */

const DropDown = ({children,className, dropRef}) => {
  return (
    <div className={className} ref={dropRef}>{children}</div>
  )
}

export default DropDown 