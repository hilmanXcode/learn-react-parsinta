import PlaceContentCenter from "./components/PlaceContentCenter";
import Card from "./components/Card";
import { useRef, useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

const App = () => {
  // const inputRef = useRef(null);
  // const tick = useRef(0);
  // const [tick, setTick] = useState(0);

  const handleClick = () => {
    // inputRef.current.focus();
    // tick.current = tick.current + 1;

    // console.log(tick.current);
    // const nextTick = tick +1;
    // setTick(nextTick);
    // console.log(nextTick);
  }

  return( 
    <PlaceContentCenter>
      <Card>
        <Card.Title>useRef Hooks</Card.Title>
        <Card.Body>
          <Input isFocused placeholder={"Email"} />
          <Input placeholder={"Password"} />
          <Button className={'bg-black'} onClick={handleClick}>Tick</Button>
        </Card.Body>
        <Card.Footer>
          {/* You clicked {tick.current} times. */}
        </Card.Footer>
      </Card>
    </PlaceContentCenter>
  )

}




export default App;