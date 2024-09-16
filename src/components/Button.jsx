const Button = (props) => {
    const {children, className = 'bg-purple-600'} = props;
    return (<button {...props} className={`${className} [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 inline-flex justify-center whitespace-nowrap items-center gap-x-2 text-white px-4 h-10 py-2 rounded`}>
      {children}
    </button>
    )
}

export default Button;