/* eslint-disable react/prop-types */

const InputBox = (props) => {
  return (
    <div className="mb-6">
        <h4 className="placeholder:font-regular mb-2.5 font-dm text-base font-bold placeholder:font-dm placeholder:text-sm placeholder:text-textColor ">{props.title}</h4>
        <props.as  
        placeholder={props.placeholder}
        className="outline-0 w-full border-b border-solid pb-2.5 border-additionalBorderColor" />
    </div>
  )
}

export default InputBox