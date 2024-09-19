import { useEffect, useState } from "react";
import PlaceContentCenter from "./components/PlaceContentCenter";
import Input from "./components/Input";
import Button from "./components/Button";

const App = () => {
  const [name, setName] = useState('');
  const [online, setOnline] = useState(false);

  // useEffect ini akan terus di render ketika ada nya perubahan 
  useEffect(() => {
    console.log('Im always rendered.');
  });
  
  // useEffect ini hanya akan di render pada page pertama kali di buka
  useEffect(() => {
    console.log('Im rendered at first time');
  }, []);

  // useEffect ini akan terpanggil jika terjadi perubahan di props / variabel yang kita definisikan di deps[]
  useEffect(() => {
    console.log(`Im now ${online ? 'online' : 'offline'}`)
  }, [online]);

  const onKeyDown = (e) => {
    console.log(e.code);
  }

  // useEffect ini digunakan untuk cleanup(try to see the difference)  
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    }
  })

  return( 
    <PlaceContentCenter>
      <Input name={'name'} type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <Button onClick={() => setOnline(online => !online)} className={'bg-black'}>Toggle Online</Button>
    </PlaceContentCenter>
  )

}




export default App;