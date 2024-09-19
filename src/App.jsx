import PlaceContentCenter from "./components/PlaceContentCenter";
import Input from "./components/Input";
import Button from "./components/Button";
import { useEffect, useState } from "react";
import axios from 'axios';
import Card from "./components/Card";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUsers = async() => {
      setLoading(true);
      try {
        const {data} = await axios('https://jsonplaceholder.typicode.com/users');
        setUsers(data);
        setLoading(false);
      } catch(error){
        console.log('Something went wrong.');
        setLoading(false);
      }
      
    }

    getUsers();
  }, []);

  return( 
    <PlaceContentCenter>
     <Card>
      <Card.Title>Users: {users.length}</Card.Title>
      <Card.Body>
        {loading ? 'Loading...' : users.length ?
        <ol>
          {users.map((user) => (
            <li key={user.id}>{user.name} ({user.username})</li>
          ))}
        </ol> : 
        <div>
          There are no users.
        </div>
        }
        
      </Card.Body>
     </Card>
    </PlaceContentCenter>
  )

}




export default App;