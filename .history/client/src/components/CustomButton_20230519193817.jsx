/* eslint-disable no-unused-vars */
import React from 'react'
import state from '../store'
import { useSnapshot } from 'valtio'



const CustomButton = ({ type, title,
        customStyles, handleClick }) => {
            const snap = useSnapshot(state)
            const generateStyle = (type) => {
                if(type === 'filled') {
                    return {
                        background: '#000',
                        color: '#fff',
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