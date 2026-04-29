import { signOut } from "firebase/auth";
import { auth } from "../../firebase";


const Logout = () => {
    const handleLogout = async () => {
        await signOut(auth);
    }
  return <button className="bg-primary text-white px-4 py-2 rounded-md" onClick={handleLogout}>ログアウト</button>
}

export default Logout

