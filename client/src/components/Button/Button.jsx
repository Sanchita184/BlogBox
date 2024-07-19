import React from 'react'

const Button = ({ className, img, text, textClassName }) => {
    return (
        <div className={className}>
            <p className={textClassName}>{text}</p>
            {img && <img src={img} className='w-5 ml-1 pb-1' />}
        </div>
    )
}

export default Button