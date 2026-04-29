import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from './firebase'
import Todo from './components/todo/Todo';
import { BrowserRouter } from "react-router";
import Logout from './components/auth/Logout';
import Signin from './components/auth/Signin';
import Index from './pages/Index';

function App() {

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);


  return (
    <BrowserRouter>
      <div>
        {user ? (
          <>
            <Logout />
            <Index />
          </>
        ) : (
          <>
            <Signin />
          </>
        )}
      </div>
    </BrowserRouter>
  )
}

export default App
