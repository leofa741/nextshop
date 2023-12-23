
import Image from 'next/image'
import { poppins, roboto } from '../config/fonts'

export default function Shop() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">

      <h1 className={`${roboto.className} text-4xl font-bold`}>
        Welcome to Shop Page
      </h1>
      {/* <h1 className={roboto.className}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1> */}
    
    </div>
  )
}
