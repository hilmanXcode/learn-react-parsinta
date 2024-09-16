const Button = (props) => {
    const {children, className = 'bg-purple-600'} = props;
    return (<button {...props} className={`${className} [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 text-white px-4 py-2 rounded`}>
      {children}
    </button>
    )
}

export default Button;