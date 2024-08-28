'use client'
import "./globals.css";
import { useRouter } from 'next/navigation';


export default function Page() {
  const router = useRouter();
  return(
    <div>
      <img className="logo"src="https://reach4home.org/wp-content/uploads/2021/06/The-Reach-Project-Logo-Regular.jpg" alt="reach image"></img>
      <h1 className ="welcome">Welcome to Ags Reach Gift Drive!</h1>

      <div className="navi">
        <a onClick={() => router.push('..')}>Home</a>
        <a onClick={() => router.push('./About')}>About</a>
        <a onClick={() => router.push('./Donations')}>Donate!</a>
      </div>

    </div>
  )
}