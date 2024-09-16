import PlaceContentCenter from "./components/PlaceContentCenter";
import Card from "./components/Card";
import Button from "./components/Button";
import { IconBrandGithub } from "@tabler/icons-react";
import Input from "./components/Input";
import Label from "./components/Label";
import { useState } from "react";

const App = () => {
  const [form, setForm] = useState({
    name: '',
    email: ''
  });
  
  const onChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const submit = (event) => {
    event.preventDefault();

    console.log(form);
  }
  
  return( 
    <PlaceContentCenter>
      <Card>
        <Card.Title>Sign up for new account!</Card.Title>
        <form onSubmit={submit}>
          <Card.Body>
            <div className={'mb-5 border rounded-lg p-4'}>
              <p>Name: {form.name || '-----'}</p>
              <p>Email: {form.email || '-----'}</p>
            </div>
            <div className='mb-6'>
              <Label htmlFor="name" value={'Name'} />
              <Input value={form.name} onChange={onChange} id={'name'} name={'name'} />
            </div>
            <div>
              <Label htmlFor="email" value={'Email'} />
              <Input value={form.email} onChange={onChange} id={'email'} name={'email'} />
            </div>
          </Card.Body>
          <Card.Footer>
            <Button className={'bg-black'}>
              <IconBrandGithub/>
              Register
            </Button>
          </Card.Footer>
        </form>
      </Card>
    </PlaceContentCenter>
  )

}




export default App;