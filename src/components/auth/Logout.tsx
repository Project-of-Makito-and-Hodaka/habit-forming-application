import { signOut } from "firebase/auth";
import { auth } from "../../firebase";


const Logout = () => {
    const handleLogout = async () => {
        await signOut(auth);
    }
  return <button onClick={handleLogout}>ログアウト</button>
}

export default Logout