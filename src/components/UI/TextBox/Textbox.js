import React from 'react';
import './TextBox.css';

const onChange = () => {}

const Textbox = (props) => {
  const {
    id,
    value,
    type,
    text,
    className
  } = props

  return (
    <div className="text-input">
      <input
        type={type}
        value={value}
        id={id}
        onChange={onChange}
        placeholder={text}
        className={className}
      />
    </div>
  )
}

export default Textbox