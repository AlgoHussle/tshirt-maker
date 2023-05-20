/* eslint-disable no-unused-vars */
import React from 'react'



const CustomButton = ({ type, title, customStyles, handleClick }) => 
{
    const generateStyle = (type) => {
        if(type === 'filled') {
            return {
                
            }
        }
    }
  return (
    <button
    className={`px-2 py-1.2 flex-1 rounded-md ${customStyles}`}
    style={generateStyle(type)}
    >

    </button>
  )
}

export default CustomButton