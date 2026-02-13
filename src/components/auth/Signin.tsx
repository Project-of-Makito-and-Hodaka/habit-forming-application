import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../firebase'

const googleProvider = new GoogleAuthProvider();

const Signin = () => {
  const handleGoogleSignin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  }
  return <button onClick={handleGoogleSignin}>Googleでログイン</button>
}

export default Signin