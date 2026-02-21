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
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: `
          radial-gradient(ellipse 55% 50% at 10% 15%, oklch(0.55 0 0) 0%, transparent 100%),
          radial-gradient(ellipse 50% 55% at 90% 85%, oklch(0.4 0 0) 0%, transparent 100%),
          oklch(0.93 0 0)
        `,
      }}
    >
      <div className="bg-card rounded-2xl p-10 w-full max-w-120 shadow-[0_4px_32px_rgba(3,2,19,0.08)] flex flex-col items-center gap-5">
        <h1 className="text-[2rem] font-bold tracking-tight m-0" style={{ color: 'var(--color-text-primary)' }}>
          ようこそ
        </h1>
        <p className="text-text-secondary text-sm text-center m-0" style={{ color: 'var(--color-text-secondary)' }}>
          Googleアカウントでログインしてください
        </p>
        <div className="w-full flex justify-center [&_button]:w-full [&_button]:max-w-full">
          <GoogleAuthButton handleGoogleSignin={handleGoogleSignin} />
        </div>
      </div>
    </div>
  )
}

export default Signin
