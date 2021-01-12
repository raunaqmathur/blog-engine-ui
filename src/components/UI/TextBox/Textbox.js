import React from 'react';
import './TextBox.css';

const onChange = () => {

}

const Textbox = (props) => {
  const {
    id,
    value,
    type,
    text,
    className,
    disabled
  } = props

  return (
    <div className="text-input">
      <input
        type={type}
        value={value}
        id={id}
        disabled={disabled}
        onChange={onChange}
        placeholder={text}
      />
    </div>
  )
}

export default Textbox