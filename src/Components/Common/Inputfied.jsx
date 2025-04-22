import React from 'react'

const Inputfied = ({ id, type, name, value, label, onChange, className, placeholder }) => {
    return (
        <div>
            <label htmlFor="" className='flex mb-1 font-semibold'>{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                id={id}
                required
                value={value}
                onChange={onChange}
                className={`${className} outline-none w-[300px] rounded-md p-[8px]`}
            />
        </div>
    )
}

export default Inputfied
