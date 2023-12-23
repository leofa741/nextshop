
import { roboto } from '@/app/config/fonts'



export default function Register() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">

      <h1 className={`${roboto.className} text-4xl font-bold`}>
        Welcome to Register Page
      </h1>
      {/* <h1 className={roboto.className}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1> */}
    
    </div>
  )
}
