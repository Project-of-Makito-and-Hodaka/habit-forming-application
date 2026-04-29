import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../firebase'
import GoogleAuthButton from '../ui/GoogleAuthButton'

const googleProvider = new GoogleAuthProvider()

const Signin = () => {
  const handleGoogleSignin = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-2xl p-10 w-full max-w-md shadow-lg flex flex-col items-center gap-6 border border-gray-200">
        <div className="flex flex-col items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-10 w-10 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 m-0">Routina</h1>
        </div>
        <p className="text-gray-600 text-base text-center m-0">
          習慣を形成し、目標を達成しましょう
        </p>
        <div className="w-full flex justify-center [&_button]:w-full [&_button]:max-w-full">
          <GoogleAuthButton handleGoogleSignin={handleGoogleSignin} />
        </div>
      </div>
    </div>
  )
}

export default Signin
