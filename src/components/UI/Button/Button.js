import React from 'react'
import './Button.css'

const Button = (props) => {
  const {
    id,
    text
  } = props

  const handlerOnClick = (event) => {
    console.log("props.onClick", props.onClick)
    props.onClick(event)
  }

  return (
    <div className="button">
      <button
        id={id}
        onClick={(e) => handlerOnClick()}
        type="submit"
      >
        {text}
      </button>
    </div>
  )
  // return (
  //   <div className="button">
  //     <button
  //       id="test"
  //       onClick={handlerOnClick}
  //       disabled={false}
  //       type="submit"
  //     >
  //       Login
  //   </button>
  //   </div>
  // )
}

export default Button