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
}

export default Button