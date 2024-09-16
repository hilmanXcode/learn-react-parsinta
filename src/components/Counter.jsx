import { useState } from 'react';
import Button from './Button';


const Counter = ({initialValue}) => {

    const [counter, setCounter] = useState(initialValue);

    const handleClick = () => {
        setCounter((prevState) => prevState + 1);
    }

    return (
        <div>
            <h1 className={'text-5xl font-bold'}>{counter}</h1>
            <div className={'flex items-center gap-2 mt-5'}>
                <Button onClick={handleClick}>
                +1
                </Button>
                <Button onClick={() => {
                    handleClick();
                    handleClick();
                    handleClick();
                }}>
                +3
                </Button>
            </div>
        </div>
    )
}

export default Counter;