import { forwardRef } from "react";

const Input = forwardRef(({ type = 'text', ...props }, ref) => {
    return (
        <input ref={ref} {...props} className={'transition duration-300 w-full focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400 border-slate-300 shadow-sm rounded-lg'} type={type} />
    )
})

export default Input;