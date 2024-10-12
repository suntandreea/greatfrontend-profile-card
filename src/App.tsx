import Profile from './components/Profile.tsx';
import {users} from "./utils/data.ts";

function App() {

  return (
    <>
      {users.map(user => <Profile key={user.id} {...user} />)}
    </>
  )
}

export default App
