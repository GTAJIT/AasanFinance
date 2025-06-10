import React from 'react'

export default function InputMsg({className, placeholder, children }) {
    const finalClassName = className ? className : " ";
    return (
        <>
            <div>
                <div className={finalClassName}>
                    <label className="block text-gray-700 mb-1">{children}</label>
                    <input
                        type="text"
                        placeholder={placeholder}
                        className="w-full border-b-2 border-gray-200 focus:border-teal-500 outline-noncfe py-2 px-1 bg-transparent resize-none"
                    />
                </div>
            </div>
        </>
    )
}
