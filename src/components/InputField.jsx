import React from 'react'

function InputField({ name, htmlfor, label, type, placeholder, isRequired, value, setValue, isDisabled, lightBg }) {
    const labelC = "block text-sm font-bold mb-2 ";
    const textCol = lightBg ? "text-gray-700" : "text-white";
    const labelClass = labelC + textCol;
    return (
        <div className="mx-5 mt-4">
            <div className="flex items-center justify-start">
                <label htmlFor={htmlfor} className={labelClass}>{label}:</label>
                {isRequired ? <span className="text-red-600 ms-2">*</span> : null}
            </div>
            <input
                type={type}
                name={name}
                id={htmlfor}
                className="w-full px-3 py-2 border rounded-md focus:outline-none"
                placeholder={placeholder}
                disabled={isDisabled}
                required={isRequired}
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </div>
    )
}

export default InputField;